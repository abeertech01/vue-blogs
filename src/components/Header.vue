<template>
  <div class="header">
    <div class="header-inside">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">VueBlogs</router-link>
      </div>
      <div class="menu">
        <i class="bx bx-menu"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
.header {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &-inside {
    display: flex;
    justify-content: space-between;
    padding: pr(5) pr(10);

    .logo {
      a {
        font-size: pr(25);
        font-weight: 600;
      }
    }

    .menu {
      font-size: pr(30);
    }
  }
}
</style>