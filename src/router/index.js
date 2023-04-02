import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Head from '../components/head.vue' 
import Title from '../components/title.vue'
import Index from "../components/index.vue"
import Main from "../components/main.vue"
import Goods from '../components/goods.vue'
import Goods2 from "../parts/goods2.vue"
import Goods3 from "../parts/goods3.vue"
import Goods4 from "../parts/goods4.vue"
import Goods5 from "../parts/goods5.vue"
import Goods6 from "../parts/goods6.vue"
import Video from '../components/video.vue'
import Footer from '../components/footer.vue'
import Tail from '../components/tail.vue'
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    { path: '/'    ,redirect:'/home'},
    { path: '/home', component: Home },
    { path: '/head', component: Head },
    { path: '/title', component: Title },
    { path: '/index', component: Index },
    { path: '/main', component: Main },
    { path: '/goods', component: Goods },
    { path: '/goods2', component: Goods2 },
    { path: '/goods3', component: Goods3 },
    { path: '/goods4', component: Goods4 },
    { path: '/goods5', component: Goods5 },
    { path: '/goods6', component: Goods6 },
    { path: '/video', component: Video },
    { path: '/footer', component: Footer },
    { path: '/tail', component: Tail },
    
    
    
    
    
    
  ]
})

export default router
