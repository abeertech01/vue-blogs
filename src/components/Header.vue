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
            <router-link :to="{ name: 'Blogs' }">Blogs</router-link>
          </li>
          <li v-show="profileId">
            <router-link :to="{ name: 'BlogWriting' }">Write</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'Login' }">Login/Register</router-link>
          </li>
          <li v-else>
            <p @click="logout">Logout</p>
          </li>
          <!-- <li class="initial" v-if="profileInitials">
            <router-link :to="{ name: 'Profile' }" class="inside">{{
              profileInitials.toUpperCase()
            }}</router-link>
          </li> -->
          <li class="initial" v-if="profileInitials">
            <router-link :to="{ name: 'ProfilePage' }" class="inside">{{
              profileInitials.toUpperCase()
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="menu">
        <i @click="openNav" class="bx bx-menu"></i>
      </div>
    </div>
    <transition name="mobile-nav">
      <div @click="openNav" v-if="menuOpen" class="mobile-menu-links">
        <ul>
          <li class="initial" v-if="profileInitials">
            <router-link :to="{ name: 'ProfilePage' }" class="inside">{{
              profileInitials.toUpperCase()
            }}</router-link>
          </li>
          <!-- <li class="initial" v-if="profileInitials">
            <router-link :to="{ name: 'Profile' }" class="inside">{{
              profileInitials.toUpperCase()
            }}</router-link>
          </li> -->
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Blogs' }">Blogs</router-link>
          </li>
          <li v-show="profileId">
            <router-link :to="{ name: 'BlogWriting' }">Write</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'Login' }">Login/Register</router-link>
          </li>
          <li v-else>
            <p @click="logout">Logout</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
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
    logout() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    profileInitials() {
      return this.$store.state.profileInitials;
    },
    profileId() {
      return this.$store.state.profileId;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.header {
  z-index: 100;
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
            margin-right: pr(20);
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
        a,
        p {
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

  .initial {
    width: pr(30);
    height: pr(30);
    text-align: center;
    border-radius: 50%;
    font-size: pr(20);
    background-color: #616161;

    a {
      position: relative;
      color: $light-grey;
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