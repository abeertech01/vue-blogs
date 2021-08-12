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
  background-color: $light-grey-2;
  border-radius: pr(5);

  @include bp-up(medium) {
    grid-template-columns: repeat(2, 1fr);
    border-radius: 0;

    &:nth-child(odd) {
      .top-blog__intro {
        order: 1;
      }
      .top-blog__photo {
        order: 2;
      }
    }

    &:nth-child(even) {
      .top-blog__intro {
        align-items: flex-end;
      }
    }
  }

  &__intro {
    order: 2;
    padding: 5%;

    @include bp-up(medium) {
      // border: 1px solid magenta;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @include bp-up(large) {
      padding: 20%;
    }
  }

  &__photo {
    order: 1;
    padding-top: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: pr(5) pr(5) 0 0;
    @include bp-up(medium) {
      border-radius: 0;
    }
  }
}
</style>