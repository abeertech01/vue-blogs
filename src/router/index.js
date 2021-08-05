import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Blogs from "../views/Blogs.vue"
import BlogWriting from "../views/BlogWriting.vue"
import Profile from "../views/Profile.vue"
import BlogPreview from "../views/BlogPreview.vue"

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
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "Profile"
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | VueBlogs`;
  next();
})

export default router
