import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from "../views/MSite/MSite.vue";
import Order from "../views/Order/Order.vue";
import Search from "../views/Search/Search.vue";
import Profile from "../views/Profile/Profile.vue";
import Login from "../views/Login/Login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/msite",
    component: MSite,
    meta: { 
      showFooter:true
     }
  },
  {
    path: "/search",
    component: Search,
    meta: { 
      showFooter:true
     }
  },
  {
    path: "/order",
    component: Order,
    meta: { 
      showFooter:true
     }
  },
  {
    path: "/profile",
    component: Profile,
    meta: { 
      showFooter:true
     }
  },
  {
    path: "/",
    redirect: "/msite",
  },
  {
    path: "/login",
    component: Login,
  },
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
