<template>
  <div class="not-found">
    <p>
      The page is not found. Go to
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.not-found {
  padding: pr(30);
  position: absolute;
  top: pr(70);

  p {
    a {
      color: blue;
      text-decoration: underline;
    }
  }
}
</style>