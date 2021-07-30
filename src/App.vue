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
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "App",
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        console.log(this.$store.state.profileEmail);
      }
    });
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$store.state.user) {
        if (
          this.$route.name === "Login" ||
          this.$route.name === "Register" ||
          this.$route.name === "ForgotPassword"
        ) {
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
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
