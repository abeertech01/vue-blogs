<template>
  <div class="blog-writing">
    <BlogPhotoPreview v-show="this.$store.state.blogPhotoPreview" />
    <Loading v-show="loading" />
    <div class="blog-writing__inside container">
      <div v-show="error" class="err-message">
        <p><span>Error:</span> {{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input
          class="blog-title"
          type="text"
          placeholder="Enter Blog Title"
          v-model="blogTitle"
        />
        <div class="upload-file">
          <label for="blog-photo">Upload Cover Photo</label>
          <input
            type="file"
            ref="blogPhoto"
            id="blog-photo"
            @change="fileChange"
            accept=".png, .jpg, .jpeg"
          />
          <button
            @click="previewBlogPhoto"
            class="preview"
            :class="{ active: this.$store.state.blogPhotoURL }"
          >
            Preview Photo
          </button>
          <div class="chosen-file">
            File Chosen: {{ $store.state.blogPhotoName }}
          </div>
        </div>
        <div class="editor">
          <vue-editor
            :customModules="customModulesForEditor"
            :editorOptions="editorSettings"
            @image-added="handleImage"
            v-model="blogHTML"
          />
        </div>
        <div class="blog-actions">
          <button @click="uploadBlog">Publish blog</button>
          <router-link class="router-button" :to="{ name: 'BlogPreview' }"
            >Blog Preview</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPhotoPreview from "../components/BlogPhotoPreview.vue";
import Loading from "../components/Loading.vue";

import firebase from "firebase/app";
import "firebase/storage";
import db from "../firebase/firebaseInit";

import Quill from "quill";
window.Quill = Quill;
import { VueEditor } from "vue2-editor";
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);

export default {
  name: "BlogWriting",
  components: {
    BlogPhotoPreview,
    Loading,
    VueEditor,
  },
  data() {
    return {
      file: null,
      error: null,
      errorMsg: "",
      loading: null,
      customModulesForEditor: [{ alias: "imageResize", module: ImageResize }],
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  computed: {
    blogHTML: {
      get() {
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("insertBlog", payload);
      },
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogCoverPhotoName() {
      return this.$store.state.blogPhotoName;
    },
    profileId() {
      return this.$store.state.profileId;
    },
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("insertFileName", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
      console.log(this.file);
    },
    handleImage(file, Editor, cursorLocation, resetUploader) {
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/blogPhotos/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => console.log(snapshot),
        (err) => console.log(err),
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          await Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      );
    },
    uploadBlog() {
      if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
        if (this.file) {
          this.loading = true;
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(
            `documents/CoverPhotos/${this.$store.state.blogPhotoName}`
          );
          docRef.put(this.file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
              this.loading = false;
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const timestamp = await Date.now();
              const dataBase = await db.collection("blogPosts").doc();

              await dataBase.set({
                blogId: dataBase.id,
                blogHTML: this.blogHTML,
                blogCoverPhoto: downloadURL,
                blogCoverPhotoName: this.blogCoverPhotoName,
                blogTitle: this.blogTitle,
                profileId: this.profileId,
                date: timestamp,
              });
              this.loading = false;
              this.$router.push({ name: "ViewBlog" });
            }
          );
          return;
        }
        this.error = true;
        this.errorMsg = "Please ensure you upload a cover photo !";
        return;
      }
      this.error = true;
      this.errorMsg =
        "Please ensure Blog Title & Blog Post. Your Blog has been filled!";
      setTimeout(() => {
        this.error = false;
      }, 5000);
      return;
    },
    previewBlogPhoto() {
      if (this.$store.state.blogPhotoURL) {
        this.$store.commit("openPhotoPreview");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../sass/variables";
@import "../sass/mixins";
.blog-writing {
  min-height: calc(100vh - 3.4375rem);

  &__inside {
    padding: 0 pr(15);
    @include bp-up(large) {
      padding: 0 pr(30);
    }
  }

  .err-message {
    width: 100%;
    margin-top: pr(15);
    margin-bottom: pr(15);
    padding: pr(5) pr(8);
    font-size: pr(18);
    color: $light-grey;
    background-color: $charcoal;
    border-radius: pr(5);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    font-family: inherit;
    font-size: pr(16);
    cursor: pointer;
    border-radius: pr(10);
    border: none;
    margin: pr(10) 0;
    padding: 5px 10px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;
    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .blog-info {
    margin-top: pr(20);
    margin-bottom: pr(30);
    .blog-title {
      display: inline-block;
      width: 100%;
      background: none;
      border-top: none;
      border-right: none;
      border-bottom: 1px solid $charcoal;
      border-left: none;
      outline: none;
      padding: pr(10) 0;
      font-size: pr(16);
      @include bp-up(large) {
        width: pr(300);
      }
    }
    .upload-file {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: pr(20);
      font-size: pr(17);

      @include bp-up(large) {
        display: inline-block;
        label {
          margin-left: pr(10);
        }
        .chosen-file {
          display: inline-block;
        }
      }

      input {
        display: none;
      }

      .preview {
        margin-left: pr(10);
        margin-right: pr(10);
      }
    }
    .editor {
      .quillWrapper {
        height: 100%;
      }

      #quill-container {
        min-height: 50vh;
      }
    }
    .blog-actions {
      margin-top: pr(30);
      button {
        margin-right: pr(14);
      }
    }
  }

  .active {
    background-color: #686666;
  }
}
</style>