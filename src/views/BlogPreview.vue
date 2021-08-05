<template>
  <div class="blog-preview">
    <div class="blog-preview__inside container">
      <h2>{{ blogTitle }}</h2>
      <img :src="blogCoverPhoto" alt="blog photo" />
      <div class="post-content" v-html="blogHTML"></div>
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

<style>
</style>