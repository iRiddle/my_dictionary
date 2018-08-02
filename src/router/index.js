import Vue from 'vue'
import Router from 'vue-router'
import Description from '@/components/Navigation/Description'
import SignIn from '@/components/Authorization/Login'
import Registration from '@/components/Authorization/Registration'
import Main from '@/components/App/Analytics'
import Words from '@/components/App/Words'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Description',
      component: Description
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/words',
      name: 'Words',
      component: Words,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('description')
  else if (!requiresAuth && currentUser) next('words')
  else next()
})

export default router
