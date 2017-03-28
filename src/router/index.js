import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import WelcomeView from '../views/WelcomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import LearningModel from '../views/LearningModel.vue'
import MlView from '../views/MlView.vue'
import YearInReview from '../views/YearInReview.vue'

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/welcome', component: WelcomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/resume', component: ResumeView },
    { path: '/learning', component: LearningModel },
    { path: '/year', component: YearInReview },
    { path: '/ml', component: MlView },
    { path: '/', redirect: '/welcome' }
  ]
})
