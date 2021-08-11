<template>
  <div class="top-blog">
    <div class="top-blog__intro">
      <h2 class="title">{{ blog.blogTitle }}</h2>
      <p class="preview">{{ preview }}</p>
      <div class="reading-link">
        <router-link to="#"
          >Read the blog <i class="bx bx-arrow-back bx-rotate-180"></i
        ></router-link>
      </div>
    </div>
    <div :style="imageStyle" class="top-blog__photo"></div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url('${this.blog.blogCoverPhoto}')`,
      };
    },
    preview() {
      return "lorem ipsum dolor";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.top-blog {
  display: grid;
  gap: pr(15);

  @include bp-up(medium) {
    grid-template-columns: repeat(2, 1fr);

    &:nth-child(odd) {
      .top-blog__intro {
        order: 1;
      }
      .top-blog__photo {
        order: 2;
      }
    }
  }

  &__intro {
    order: 2;

    @include bp-up(medium) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__photo {
    order: 1;
    padding-top: 72%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>