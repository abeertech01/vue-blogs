<template>
  <div class="blog-cover">
    <div class="image">
      <button @click="close"><i class="bx bx-x-circle"></i></button>
      <img :src="photoURL" alt="Blog Cover Photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPhotoPreview",
  computed: {
    photoURL() {
      return this.$store.state.blogPhotoURL;
    },
  },
  methods: {
    close() {
      this.$store.commit("openPhotoPreview");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.blog-cover {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #303030cb;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  .image {
    position: relative;
    background-color: $light-grey;
    max-width: pr(400);
    padding: pr(30);
    border-radius: pr(5);
    @include bp-up(large) {
      max-width: pr(550);
    }

    button {
      // border: 1px solid magenta;
      width: pr(40);
      height: pr(40);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: absolute;
      top: pr(-10);
      right: 0;
      font-size: pr(30);
      cursor: pointer;
      background-color: $light-grey;
      border: none;
      outline: none;

      i {
        color: $charcoal;
      }
    }

    img {
      width: 100%;
      border-radius: pr(5);
    }
  }
}
</style>