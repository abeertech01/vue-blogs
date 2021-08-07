<template>
  <div class="profile">
    <Loading v-show="loading" />
    <h1 class="profile__title">Profile</h1>
    <p class="profile__subtitle">You can edit your name and save it.</p>
    <form>
      <div class="inputs">
        <input type="text" placeholder="Name" v-model="name" />
        <input disabled type="email" placeholder="Email" v-model="email" />
      </div>
      <button @click.prevent="save" class="profile__save-btn">Save</button>
    </form>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
export default {
  name: "ProfilePage",
  components: { Loading },
  data() {
    return {
      loading: null,
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.profileName;
      },
      set(payload) {
        this.loading = true;
        this.$store.commit("changeName", payload);
        this.loading = false;
      },
    },
    email() {
      return this.$store.state.profileEmail;
    },
  },
  methods: {
    save() {
      this.$store.dispatch("updateUserSettings");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.profile {
  padding: pr(25);
  text-align: center;

  &__subtitle {
    margin-bottom: pr(30);
  }

  form {
    max-width: pr(360);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputs {
      width: 100%;
      padding: pr(15);
      margin-bottom: pr(15);
      background-color: $light-grey-2;
      border-radius: pr(5);
      input {
        display: block;
        width: 100%;
        padding: pr(10);
        font-size: pr(17);
        background-color: $light-grey;
        border: none;
        outline: none;
        border-radius: pr(5);

        &:not(:last-child) {
          margin-bottom: pr(15);
        }
      }
    }

    button {
      width: 100%;
      padding: pr(5);
      font-size: pr(18);
      background-color: $charcoal;
      color: $light-grey;
      border: none;
      border-radius: pr(5);
    }
  }
}
</style>