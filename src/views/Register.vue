<template>
  <div class="register">
    <Loading v-show="loading" />
    <h1>VueBlogs</h1>
    <div class="register__inside">
      <form>
        <p class="register__login-reg">
          Already have an account?
          <router-link class="login-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>
        <h3>Register to Vueblogs</h3>
        <div class="inputs">
          <div class="input">
            <i class="bx bxs-user"></i
            ><input type="text" placeholder="Name" v-model="name" />
          </div>
          <div class="input">
            <i class="bx bx-mail-send"></i
            ><input type="email" placeholder="Email" v-model="email" />
          </div>
          <div class="input">
            <i class="bx bxs-lock-alt"></i
            ><input type="password" placeholder="Password" v-model="password" />
          </div>
          <button @click.prevent="register" class="reg-btn">Register</button>
        </div>
      </form>
      <div class="error" v-show="error">{{ errorMsg }}</div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    Loading,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
      loading: null,
    };
  },
  methods: {
    async register() {
      if (this.name !== "" && this.email !== "" && this.password.length >= 6) {
        this.error = false;
        this.errorMsg = "";
        this.loading = true;
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          name: this.name,
          email: this.email,
        });
        this.loading = false;
        this.$router.push({ name: "Home" });
        return;
      }
      this.loading = false;
      this.error = true;
      this.errorMsg =
        "Failed. Any field is empty or the given password is short";
      return;
    },
  },
};
</script>

<style lang="scss">
@import "../sass/variables";
.register {
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
            font-size: pr(16);
            padding: pr(6) pr(11);
            border: none;
            outline: none;
            border-radius: pr(5);
          }
        }

        .reg-btn {
          color: $light-grey;
          background-color: $charcoal;
          font-size: pr(18);
          padding: pr(2) pr(7);
          border: none;
          border-radius: pr(3);
        }
      }
    }
    .error {
      color: red;
      text-align: center;
      margin-top: pr(15);
    }
  }

  &__login-reg {
    text-align: center;
    .login-link {
      text-decoration: underline;
    }
  }
}
</style>