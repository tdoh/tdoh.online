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
        label: '首頁',
        index: 0
      },
      component: views.Home
    },
    {
      path: '/active',
      name: 'Active',
      meta: {
        label: '大會活動',
        index: 1
      },
      component: views.Active
    },
    {
      path: '/agenda',
      name: 'Agenda',
      meta: {
        label: '議程資訊',
        index: 2
      },
      component: views.Agenda
    },
    {
      path: '/traffic',
      name: 'Traffic',
      meta: {
        label: '交通資訊',
        index: 3
      },
      component: views.Traffic
    },
    {
      path: '/support',
      name: 'Support',
      meta: {
        label: '協辦單位',
        index: 4
      },
      component: views.Support
    },
    {
      path: '/team',
      name: 'Team',
      meta: {
        label: '工作團隊',
        index: 5
      },
      component: views.Team
    },
    {
      path: '/map',
      name: 'FloorMap',
      meta: {
        label: '場地平面圖',
        index: 6
      },
      component: views.FloorMap
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
