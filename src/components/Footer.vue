<template>
  <div class="footer">
    <div class="footer-inside container">
      <div class="logo-socials">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">VueBlogs - Abeer</router-link>
        </div>
        <div class="socials">
          <a href="https://www.facebook.com/abeertech01/" target="_blank"
            ><i class="bx bxl-facebook-square"></i
          ></a>
          <a href="https://twitter.com/abeertech01" target="_blank"
            ><i class="bx bxl-twitter"></i
          ></a>
          <a href="https://www.linkedin.com/in/abeertech01/" target="_blank"
            ><i class="bx bxl-linkedin-square"></i
          ></a>
          <a
            href="https://www.youtube.com/channel/UCtpkriCi3uO8iI4_NoBpRyw"
            target="_blank"
            ><i class="bx bxl-youtube"></i
          ></a>
        </div>
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
            <router-link :to="{ name: 'Login' }">Login/Register</router-link>
          </li>
        </ul>
      </div>
      <div class="empty"></div>
      <div class="copyright">
        <p><i class="bx bx-copyright"></i> Abeer - All rights are reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
.footer {
  color: $light-grey;
  background-color: $charcoal;
  &-inside {
    text-align: center;
    display: grid;
    gap: pr(7);
    padding: pr(25) pr(10);

    @include bp-up(medium) {
      grid-template-columns: 1fr 1fr 0.1fr 1.5fr;
    }
    @include bp-up(large) {
      padding: pr(25) pr(25);
    }

    .logo-socials {
      @include bp-up(medium) {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .logo {
        margin-bottom: pr(15);
        a {
          font-size: pr(25);
        }
      }
      .socials {
        a {
          font-size: pr(22);
          &:not(:last-child) {
            margin-right: pr(10);
          }
        }
      }
    }

    .menu-links {
      ul {
        li {
          display: inline-block;
          &:not(:last-child) {
            margin-right: pr(15);
          }
          @include bp-up(medium) {
            text-align: left;
            display: block;
          }
          a {
            font-size: pr(18);
          }
        }
      }
    }

    .copyright {
      font-size: pr(18);
      @include bp-up(medium) {
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
}

a,
a:active,
a:hover {
  color: $light-grey;
}
</style>