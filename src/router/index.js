import Vue from 'vue'
import Router from 'vue-router'
import daughter from '@/components/daughter'
import Wife from '@/components/Wife'
import mylove from '@/components/mylove'
import HelloWorld from '@/components/HelloWorld'
import Family from '@/components/Family'
import welove from '@/components/welove'
import Future from '@/components/Future'
import FaDetailsPage from '@/components/FaDetailsPage'
import FaTowPage from '@/components/FaTowPage'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'*',
      redirect:'daughter'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      //重定项
      redirect: '/HelloWorld/daughter',
      children: [
        {
          name: 'daughter',
          path: 'daughter',
          component: daughter
        },
        {
          name: 'Wife',
          path: 'Wife',
          component: Wife
        },
        {
          name: 'mylove',
          path: 'mylove',
          component: mylove
        },
        {
          name: 'Family',
          path: 'Family',
          component: Family,
        },
        {
          name: 'FaDetailsPage',
          path: '/Family/FaDetailsPage/:id?',
          component: FaDetailsPage
        },
        {
          name: 'FaTowPage',
          path: '/Family/FaTowPage/:id?',
          component: FaTowPage
        },
        {
          name: 'welove',
          path: 'welove',
          component: welove
        },
        {
          name: 'Future',
          path: 'Future',
          component: Future
        }
      ]
    }
  ]
})
