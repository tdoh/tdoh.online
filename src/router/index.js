import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        label: '首頁'
      },
      component: views.Home
    },
    {
      path: '/active',
      name: 'Active',
      meta: {
        label: '大會活動'
      },
      component: views.Active
    },
    {
      path: '/agenda',
      name: 'Agenda',
      meta: {
        label: '議程資訊'
      },
      component: views.Agenda
    },
    {
      path: '/traffic',
      name: 'Traffic',
      meta: {
        label: '交通資訊'
      },
      component: views.Traffic
    },
    {
      path: '/support',
      name: 'Support',
      meta: {
        label: '協辦單位'
      },
      component: views.Support
    },
    {
      path: '/team',
      name: 'Team',
      meta: {
        label: '工作團隊'
      },
      component: views.Team
    },
    {
      path: '/',
      name: 'FloorMap',
      meta: {
        label: '場地平面圖'
      },
      component: views.FloorMap
    }
  ]
})

export default router
