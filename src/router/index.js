import Vue from 'vue'
import VueRouter from 'vue-router'
import resumePage from "@/views/resumePage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: resumePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
