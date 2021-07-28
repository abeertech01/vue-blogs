<template>
  <div class="forgot-password">
    <h1>VueBlogs</h1>
    <div class="forgot-password__inside">
      <form>
        <h3>Reset Password</h3>
        <p class="forgot-password__reset-text">
          Forgot password? Enter your email to reset
        </p>
        <div class="inputs">
          <div class="input">
            <i class="bx bx-mail-send"></i
            ><input type="email" placeholder="Email" v-model="email" />
          </div>
          <button class="reset-btn">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>