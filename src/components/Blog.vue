<template>
  <div class="blog">
    <div
      :style="{ 'background-image': `url('${blogPost.blogCoverPhoto}')` }"
      class="coverPhoto"
    >
      <div class="edit-delete" v-show="isAuthor">
        <button class="edit"><i class="bx bxs-edit"></i></button>
        <button class="delete" @click="deleteIt">
          <i class="bx bx-x"></i>
        </button>
      </div>
    </div>
    <div class="info">
      <h3 class="title">{{ blogPost.blogTitle }}</h3>
      <p class="date">
        Written -
        {{
          new Date(blogPost.blogDate).toLocaleString("en-us", {
            dateStyle: "long",
          })
        }}
      </p>
      <router-link
        class="to-view-blog"
        :to="{ name: 'ViewBlog', params: { blogid: blogPost.blogId } }"
        >View Blog <i class="bx bx-arrow-back bx-flip-horizontal"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogPost"],
  computed: {
    isAuthor() {
      if (this.$store.state.user) {
        return this.$store.state.user.uid === this.blogPost.profileId;
      }
      return false;
    },
  },
  methods: {
    deleteIt() {
      if (this.isAuthor) {
        this.$store.dispatch("deletePost", this.blogPost.blogId);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
.blog {
  border-radius: pr(7);
  background-color: $light-grey-2;
  .coverPhoto {
    position: relative;
    width: 100%;
    height: pr(260);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: pr(7) pr(7) 0 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

    .edit-delete {
      position: absolute;
      top: pr(10);
      right: pr(10);
      button {
        width: pr(30);
        height: pr(30);
        border: none;
        outline: none;
        border-radius: 50%;
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

        &:not(:last-child) {
          margin-right: pr(7);
        }
      }

      i {
        font-size: pr(20);
      }
    }
  }

  .info {
    padding: pr(10);
    .title {
      margin-bottom: pr(5);
    }
    .date {
      margin-bottom: pr(60);
    }
    .to-view-blog {
      text-decoration: underline;
    }
  }
}
</style>