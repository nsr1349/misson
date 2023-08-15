import { createRouter, createWebHistory } from "vue-router";
import HomePage from './HomePage.vue'
import searchResult from './searchResult.vue'

export default createRouter({
  history : createWebHistory(),
  routes : [
    {
      path: '/',
      component : HomePage,
      children : [{
        path: '/search',
        component : searchResult,
      }]
    }
  ]
})