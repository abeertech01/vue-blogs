<template>
  <div class="blog-preview">
    <div class="blog-preview__inside container">
      <button @click="goBack" class="back-btn router-button">Back</button>
      <h2>{{ blogTitle }}</h2>
      <img class="cover-photo" :src="blogCoverPhoto" alt="blog photo" />
      <div v-html="blogHTML" class="post-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPreview",
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoURL;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
@import "../sass/variables";
@import "../sass/mixins";
.blog-preview {
  &__inside {
    padding: pr(25);
    @include bp-up(large) {
      padding: pr(50);
    }

    h2 {
      margin: pr(30) 0;
    }

    .cover-photo {
      max-width: 100%;
      max-height: 45vh;
      @include bp-up(large) {
        max-height: 55vh;
      }
    }

    .post-content {
      margin-top: pr(30);
      img {
        max-width: 100%;
      }
    }

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
  }
}
</style>