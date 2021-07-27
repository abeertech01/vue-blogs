<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    AppHeader: Header,
  },
};
</script>

<style lang="scss">
@import "./sass/variables";
body {
  font-family: $reem-kufi;
  color: $charcoal;
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
</style>
