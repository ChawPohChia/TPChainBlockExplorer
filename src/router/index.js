import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blockinfo',
    name: 'BlockInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/BlockInfo.vue')
  }, 
  {
    path: '/transactioninfo',
    name: 'TransactionInfo',
    component: () => import(/* webpackChunkName: "about" */ '../components/TransactionInfo.vue')
  }, 
  {
    path: '/accountinfo',
    name: 'AccountInfo',
    component: () => import(/* webpackChunkName: "about" */ '../components/AccountInfo.vue')
  }, 
  {
    path: '/networkinfo',
    name: 'NetworkInfo',
    component: () => import(/* webpackChunkName: "about" */ '../components/NetworkInfo.vue')
  },
  {
    path: '/peerinfo',
    name: 'PeerInfo',
    component: () => import(/* webpackChunkName: "about" */ '../components/PeerInfo.vue')
  },
  {
    path: '/faucet',
    name: 'Faucet',
    component: () => import(/* webpackChunkName: "about" */ '../components/Faucet.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
