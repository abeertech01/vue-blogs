<template>
  <div class="top-blog">
    <div class="top-blog__intro">
      <h2 class="title">{{ blog.title }}</h2>
      <p class="preview">{{ blog.preview }}</p>
      <div class="reading-link">
        <router-link to="#"
          >Read the blog <i class="bx bx-arrow-back bx-rotate-180"></i
        ></router-link>
      </div>
    </div>
    <div class="top-blog__photo">
      <img
        :src="require(`../assets/samplePics/${blog.photo}.jpg`)"
        alt="Blog Photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.top-blog {
  display: flex;
  flex-direction: column;

  @include bp-up(large) {
    flex-direction: row;
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
    flex: 1;

    @include bp-up(large) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      padding: pr(50);
    }
    .preview {
      width: 100%;
      margin-bottom: pr(10);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .reading-link {
      a {
        text-decoration: underline;
      }
    }
  }
  &__photo {
    order: 1;
    flex: 1;

    img {
      width: 100%;
    }
  }
}
</style>