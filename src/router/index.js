import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../view/login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.path != '/') {
    console.log('123')
    next()
  }
  else {
    next()
  }


})

export default router
