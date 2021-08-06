<template>
  <div class="blog-preview">
    <div class="blog-preview__inside container">
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
  }
}
</style>