<template>
  <div class="blogs">
    <div class="blogs__inside container">
      <Blog
        class="blogs__blog"
        v-for="(post, index) in blogs"
        :blogPost="post"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";

export default {
  name: "Blogs",
  components: {
    Blog,
  },
  computed: {
    blogs() {
      return this.$store.state.blogPosts;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.blogs {
  @include bp-up(xlarge) {
    padding: pr(50) 0;
  }
  &__inside {
    display: grid;
    gap: pr(20);
    padding: pr(25);

    @include bp-up(medium) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include bp-up(large) {
      grid-template-columns: repeat(3, 1fr);
    }
    @include bp-up(xlarge) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__blog {
    // border: 1px solid magenta;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
}
</style>