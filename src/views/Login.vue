<template>
  <div class="login">
    <h1>VueBlogs</h1>
    <div class="login__inside">
      <form>
        <p class="login__login-reg">
          Don't have an account?
          <router-link class="reg-link" :to="{ name: 'Register' }"
            >Register</router-link
          >
        </p>
        <h3>Login to Vueblogs</h3>
        <div class="inputs">
          <div class="input">
            <i class="bx bx-mail-send"></i
            ><input type="email" placeholder="Email" v-model="email" />
          </div>
          <div class="input">
            <i class="bx bxs-lock-alt"></i
            ><input type="password" placeholder="Password" v-model="password" />
          </div>
          <button @click.prevent="login" class="login-btn">Login</button>
        </div>
        <div class="error" v-show="error">{{ errorMsg }}</div>
        <p class="login__fotgot-pass">
          Forgot password?
          <router-link class="forgot-pass-link" :to="{ name: 'ForgotPassword' }"
            >Reset</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style lang="scss">
@import "../sass/variables";
.login {
  h1 {
    text-align: center;
    margin-bottom: pr(30);
  }

  &__inside {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin-bottom: pr(5);
      }

      .inputs {
        padding: pr(12);
        border-radius: pr(5);
        background-color: $light-grey-2;

        .input {
          &:not(:last-child) {
            margin-bottom: pr(15);
          }
          i {
            position: relative;
            top: pr(5);
            right: pr(2);
            font-size: pr(25);
          }
          input {
            font-size: pr(18);
            padding: pr(6) pr(11);
            border: none;
            outline: none;
            border-radius: pr(5);
          }
        }

        .login-btn {
          color: $light-grey;
          background-color: $charcoal;
          font-size: pr(18);
          padding: pr(2) pr(7);
          border: none;
          border-radius: pr(3);
        }
      }

      .error {
        color: red;
        margin: pr(5) 0;
        text-align: center;
      }
    }
  }

  &__login-reg {
    text-align: center;
    .reg-link {
      text-decoration: underline;
    }
  }

  &__fotgot-pass {
    text-align: center;
    margin-top: pr(15);
    .forgot-pass-link {
      text-decoration: underline;
    }
  }
}
</style>