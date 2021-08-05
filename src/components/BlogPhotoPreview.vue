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
    padding: pr(32);
    border-radius: pr(5);

    button {
      position: absolute;
      top: 0;
      right: 0;
      font-size: pr(30);
      cursor: pointer;
      background: none;
      border: none;
      outline: none;
    }

    img {
      width: 100%;
      border-radius: pr(5);
    }
  }
}
</style>