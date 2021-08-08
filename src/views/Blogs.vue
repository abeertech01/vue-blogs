<template>
  <div class="blogs">
    <div class="blogs__notice">
      <marquee behavior="scroll" direction="left">
        <p>Only Author can delete or edit posts. Others can only read them.</p>
      </marquee>
      <p class="no-marquee">
        Only Author can delete or edit posts. Others can only read them.
      </p>
    </div>
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
  &__notice {
    margin: pr(15) pr(25);
    overflow: hidden;
    @include bp-up(large) {
      overflow: initial;
    }
    marquee {
      @include bp-up(medium) {
        display: none;
      }
    }
    .no-marquee {
      // border: 1px solid magenta;
      display: none;
      text-align: center;
      @include bp-up(medium) {
        display: block;
      }
      @include bp-up(xlarge) {
        position: relative;
        bottom: pr(10);
      }
    }
  }
  &__inside {
    // border: 1px solid magenta;
    display: grid;
    gap: pr(20);
    padding: 0 pr(25) pr(25) pr(25);

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
    transition: all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>