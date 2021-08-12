<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-inside container">
        <div class="hero-illus">
          <img src="../assets/coding.svg" alt="coding" />
        </div>
        <div class="hero-welcoming">
          <h1>Welcome To VueBlogs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ut
            cumque! Perspiciatis mollitia illum repellat.
          </p>
          <div class="hero-auth">
            <router-link class="auth-btn" :to="{ name: 'Login' }"
              >Login/Register</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Top Blogs Section -->
    <div class="top-blogs">
      <h1 class="top-blogs__heading">Top Blogs</h1>
      <div class="top-blogs__inside container">
        <top-blog
          class="top-blogs__each"
          :blog="blog"
          v-for="(blog, index) in topBlogs"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopBlog from "../components/TopBlog.vue";
export default {
  name: "Home",
  components: {
    TopBlog,
  },
  computed: {
    topBlogs() {
      return this.$store.state.topBlogs;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.home {
  .hero {
    min-height: calc(100vh - 3.4375rem);
    padding: pr(5) pr(40);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include bp-up(large) {
      padding: pr(5) pr(10);
    }

    &-inside {
      // border: 1px solid magenta;

      @include bp-up(large) {
        display: flex;
        align-items: center;
      }
    }

    &-illus {
      // border: 1px solid magenta;
      text-align: center;
      margin-bottom: pr(50);

      @include bp-up(large) {
        order: 2;
        margin-bottom: 0;
        padding: pr(15);
        flex: 1;
      }

      img {
        width: 70%;
        @include bp-up(medium) {
          width: 50%;
        }
        @include bp-up(large) {
          width: 70%;
        }
      }
    }

    &-welcoming {
      // border: 1px solid magenta;

      @include bp-up(large) {
        order: 1;
        flex: 1;
        padding: pr(15);
      }

      h1 {
        margin-bottom: pr(15);
        @include bp-up(large) {
          margin-bottom: pr(20);
        }
      }
      p {
        margin-bottom: pr(15);
        font-size: pr(18);

        @include bp-up(large) {
          margin-bottom: pr(20);
          font-size: pr(20);
        }
      }
    }

    &-auth {
      .auth-btn {
        color: $light-grey;
        padding: pr(1) pr(3);
        border-radius: pr(4);
        background-color: $charcoal;

        @include bp-up(large) {
          padding: pr(1) pr(7);
          font-size: pr(19);
        }
      }
    }
  }

  .top-blogs {
    margin-bottom: pr(80);
    &__inside {
      padding: pr(5) pr(40);
      @include bp-up(large) {
        padding: pr(5) pr(25);
      }
    }
    &__heading {
      text-align: center;
      margin-bottom: pr(50);
    }
    &__each {
      &:not(:last-child) {
        margin-bottom: pr(60);
      }

      @include bp-up(medium) {
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
