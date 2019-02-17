import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import User from '@/components/User'
import CreateMinute from '@/components/CreateMinute'
import EditMinute from '@/components/EditMinute'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user/createminute',
      name: 'CreateMinute',
      component: CreateMinute
    },
    {
      path: '/user/editminute',
      name: 'EditMinute',
      component: EditMinute
    }
  ]
})
