import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Blogs from "../views/Blogs.vue"
import BlogWriting from "../views/BlogWriting.vue"
import BlogPreview from "../views/BlogPreview.vue"
import ViewBlog from "../views/ViewBlog.vue"
import ProfilePage from "../views/ProfilePage.vue"
import EditBlog from "../views/EditBlog.vue";
import NotFound from "../views/NotFound.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: "Register"
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: "Forgot Password"
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: {
      title: "Blogs"
    }
  },
  {
    path: '/blog-writing',
    name: 'BlogWriting',
    component: BlogWriting,
    meta: {
      title: "Blog Writing"
    }
  },
  {
    path: '/profile-page',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: {
      title: "Profile Page"
    }
  },
  {
    path: '/blog-preview',
    name: 'BlogPreview',
    component: BlogPreview,
    meta: {
      title: "Blog Preview"
    }
  },
  {
    path: '/view-blog/:blogid',
    name: 'ViewBlog',
    component: ViewBlog,
    meta: {
      title: "View Blog"
    }
  },
  {
    path: '/edit-blog/:blogid',
    name: 'EditBlog',
    component: EditBlog,
    meta: {
      title: "Edit Blog"
    }
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: "Not Found"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | VueBlogs`;
  next();

  if (to.name === 'Home' || to.name === 'Login' || to.name === 'Register' || to.name === 'ProfilePage' || to.name === 'ForgotPassword' || to.name === 'Blogs' || to.name === 'ViewBlog') {
    next();
  } else {
    let user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next('/');
    }
  }
})

export default router
