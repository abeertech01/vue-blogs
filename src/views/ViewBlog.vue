<template>
  <div class="view-blog">
    <div class="container quillWrapper">
      <h2>{{ title }}</h2>
      <h4>
        Posted on:
        {{
          new Date(date).toLocaleString("en-us", {
            dateStyle: "long",
          })
        }}
      </h4>
      <img :src="coverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="html"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null,
      title: "",
      date: null,
      coverPhoto: null,
      html: "",
    };
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.find((post) => {
      return post.blogId === this.$route.params.blogid;
    });
    this.title = this.currentBlog.blogTitle;
    this.date = this.currentBlog.blogDate;
    this.coverPhoto = this.currentBlog.blogCoverPhoto;
    this.html = this.currentBlog.blogHTML;
  },
  beforeRouteEnter(_, from, next) {
    if (from.name === "Blogs") {
      next();
    } else if (from.name === "BlogWriting") {
      next();
    } else if (from.name === "EditBlog") {
      next();
    } else {
      next({ name: "Home" });
    }
  },
};
</script>

<style lang="scss">
@import "../sass/variables";
@import "../sass/mixins";
.view-blog {
  .quillWrapper {
    padding: pr(25);
    @include bp-up(large) {
      padding: pr(50);
    }

    h2 {
      margin: pr(30) 0;
    }

    h4 {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 24px;
    }

    img {
      max-width: 100%;
      max-height: 45vh;
      @include bp-up(large) {
        max-height: 55vh;
      }
    }

    .post-content {
      margin-top: pr(30);
      padding: 0;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>