import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Shopcart = () => import('@/views/shopcart/Shopcart')
const Profile = () => import('@/views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)
// 2.创建router
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 重复点击路由报错的解决代码
export default router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
