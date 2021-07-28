import Vue from 'vue'
import Vuex from 'vuex'

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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
