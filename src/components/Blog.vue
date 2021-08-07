<template>
  <div class="blog">
    <div
      :style="{ 'background-image': `url('${blogPost.blogCoverPhoto}')` }"
      class="coverPhoto"
    ></div>
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
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
.blog {
  border-radius: pr(7);
  background-color: $light-grey-2;
  .coverPhoto {
    width: 100%;
    height: pr(260);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: pr(7) pr(7) 0 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
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