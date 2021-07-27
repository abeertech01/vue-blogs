<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
};
</script>

<style lang="scss">
@import "./sass/variables";
body {
  font-family: $reem-kufi;
  color: $charcoal;
  background-color: $light-grey;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a,
a:active,
a:hover {
  text-decoration: none;
  color: $charcoal;
}

ul {
  list-style: none;
  padding-left: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  max-width: pr(1440);
  margin: 0 auto;
}
</style>
