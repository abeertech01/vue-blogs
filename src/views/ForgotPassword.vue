<template>
  <div class="forgot-password">
    <div v-show="isLoading" class="loading">
      <button @click="loadingDone">Done</button>
    </div>
    <h1>VueBlogs</h1>
    <div class="forgot-password__inside">
      <form>
        <h3>Reset Password</h3>
        <p class="forgot-password__reset-text">
          Forgot password? Enter your email to reset it.
        </p>
        <div class="inputs">
          <div class="input">
            <i class="bx bx-mail-send"></i
            ><input type="email" placeholder="Email" v-model="email" />
          </div>
          <button @click.prevent="resetPW" class="reset-btn">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      isLoading: false,
    };
  },
  methods: {
    resetPW() {
      this.isLoading = true;
      firebase.auth().sendPasswordResetEmail(this.email);
    },
    loadingDone() {
      this.$router.push({ name: "Login" });
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss">
@import "../sass/variables";
.forgot-password {
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

        .reset-btn {
          color: $light-grey;
          background-color: $charcoal;
          font-size: pr(18);
          padding: pr(2) pr(7);
          border: none;
          border-radius: pr(3);
        }
      }
    }
  }

  &__reset-text {
    text-align: center;
    margin-bottom: pr(10);
  }

  .loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303030a8;

    button {
      text-transform: uppercase;
      padding: pr(10) pr(20);
      font-size: pr(20);
      cursor: pointer;
      font-weight: 600;
      background-color: $light-grey;
      border: none;
      border-radius: pr(5);
    }
  }
}
</style>