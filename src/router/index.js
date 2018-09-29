import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/2018/',
      name: 'Home',
      meta: {
        label: '首頁',
        index: 0
      },
      component: views.Home
    },
    {
      path: '/2018/active',
      name: 'Active',
      meta: {
        label: '大會活動',
        index: 1
      },
      component: views.Active
    },
    {
      path: '/2018/agenda',
      name: 'Agenda',
      meta: {
        label: '議程資訊',
        index: 2
      },
      component: views.Agenda
    },
    {
      path: '/2018/traffic',
      name: 'Traffic',
      meta: {
        label: '交通資訊',
        index: 3
      },
      component: views.Traffic
    },
    {
      path: '/2018/support',
      name: 'Support',
      meta: {
        label: '協辦單位',
        index: 4
      },
      component: views.Support
    },
    {
      path: '/2018/team',
      name: 'Team',
      meta: {
        label: '工作團隊',
        index: 5
      },
      component: views.Team
    },
    {
      path: '/2018/map',
      name: 'FloorMap',
      meta: {
        label: '場地平面圖',
        index: 6
      },
      component: views.FloorMap
    },
    {
      path: '*',
      name: 'Error',
      component: views.Error
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
