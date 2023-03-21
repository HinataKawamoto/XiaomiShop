import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Head from '../components/head.vue' 
import Title from '../components/title.vue'
import Index from "../components/index.vue"
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
  {path:'/',redirect:'/home'},
    { path: '/home', component: Home },
    { path: '/head', component: Head },
    { path: '/title', component: Title },
    { path: '/index', component: Index },
    
    
  ]
})

export default router
