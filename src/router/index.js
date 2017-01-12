import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from '../components/Hello.vue'
import WelcomeView from '../views/WelcomeView.vue'

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/welcome', component: WelcomeView },
    { path: '/', redirect: '/welcome' }
  ]
})
