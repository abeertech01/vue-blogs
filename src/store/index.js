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
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoURL: null,
    blogPhotoPreview: null,
    blogPhotoFile: null,
    user: null,
    userPosts: [],
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
    },
    insertBlog(state, payload) {
      state.blogHTML = payload;
    },
    insertFileName(state, payload) {
      state.blogPhotoName = payload;
    },
    storePhotoFile(state, payload) {
      state.blogPhotoFile = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoURL = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    filterBlogPosts(state, payload) {
      state.blogPosts = state.blogPosts.filter((post) => post.blogId !== payload);
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
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
    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogId === doc.id)) {
          const data = {
            blogId: doc.data().blogId,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
            profileId: doc.data().profileId,
          };
          state.blogPosts.push(data);
        }
      });
      // state.postLoaded = true;
    },
    async deletePost(context, payload) {
      const post = await db.collection("blogPosts").doc(payload);
      await post.delete();
      context.commit("filterBlogPosts", payload);
    }
  },
  modules: {
  }
})
