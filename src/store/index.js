import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleTopBlogs: [
      {
        title: "Top Blog One",
        preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
        link: "",
        photo: "pic-1"
      },
      {
        title: "Top Blog Two",
        preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
        link: "",
        photo: "pic-2"
      }
    ],
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    user: null,
    profileId: null,
    profileName: null,
    profileEmail: null,
    profileInitials: null
  },
  mutations: {
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileName = doc.data().name;
      state.profileEmail = doc.data().email;
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileName.match(/^[A-z]/g).join("");
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    changeName(state, payload) {
      state.profileName = payload;
    }
  },
  actions: {
    async getCurrentUser(context) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const resultDB = await dataBase.get();
      context.commit("setProfileInfo", resultDB);
      context.commit("setProfileInitials");
    },
    async updateUserSettings(context) {
      const dataBase = await db.collection('users').doc(context.state.profileId);
      await dataBase.update({
        name: context.state.profileName
      });
      context.commit("setProfileInitials");
    }
  },
  modules: {
  }
})
