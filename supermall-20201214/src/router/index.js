import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1、安装插件
Vue.use(VueRouter)

// 2、创建路由对象
const routes = [
  {
    path: '',
    redirect:'/home'
    // name: 'HelloWorld',
    // component: HelloWorld
  },
  {
    path:'/home',//文件夹名称
    component:Home
  },
  {
    path:'/category',//文件夹名称
    component:Category
  },
  {
    path:'/cart',//文件夹名称
    component:Cart
  },
  {
    path:'/profile',//文件夹名称
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

// 导出 router
export default router
