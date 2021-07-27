<template>
  <div class="header">
    <div class="header-inside container">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">VueBlogs</router-link>
      </div>
      <div class="menu-links">
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link to="#">Blogs</router-link>
          </li>
          <li>
            <router-link to="#">Login/Register</router-link>
          </li>
        </ul>
      </div>
      <div class="menu">
        <i @click="openNav" class="bx bx-menu"></i>
      </div>
    </div>
    <transition name="mobile-nav">
      <div v-if="menuOpen" class="mobile-menu-links">
        <ul>
          <li>
            <router-link to="#">Home</router-link>
          </li>
          <li>
            <router-link to="#">Blogs</router-link>
          </li>
          <li>
            <router-link to="#">Login/Register</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openNav() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.header {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &-inside {
    min-height: pr(55);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: pr(5) pr(10);

    .logo {
      a {
        font-size: pr(25);
        font-weight: 600;
      }
    }

    .menu {
      font-size: pr(30);
      @include bp-up(medium) {
        display: none;
      }
    }

    .menu-links {
      @include bp-down(small) {
        display: none;
      }
      ul {
        li {
          display: inline-block;
          font-size: pr(20);
          &:not(:last-child) {
            margin-right: pr(30);
          }
        }
      }
    }
  }

  .mobile-menu-links {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    padding: pr(20);
    background-color: $charcoal;
    ul {
      li {
        a {
          color: $light-grey;
          font-size: pr(18);
          text-transform: uppercase;
        }
        &:not(:last-child) {
          margin-bottom: pr(20);
        }
      }
    }

    @include bp-up(medium) {
      display: none;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.7s ease;
  }

  .mobile-nav-enter,
  .mobile-nav-leave {
    transform: translateX(-100%);
  }

  .mobile-nav-enter-to {
    transform: translateX(0%);
  }

  .mobile-nav-leave-to {
    transform: translateX(-100%);
  }
}
</style>