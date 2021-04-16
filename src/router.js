import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Tools from './views/Tools.vue'
import TodoList from './views/TodoList.vue'
import Analytics from './views/Analytics.vue'
import Ringtones from './views/Ringtones.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tools',
      component: Tools,
      children: [
        { path: '', component: TodoList },
        { path: 'analytics', component: Analytics },
        { path: 'ringtones', component: Ringtones }
      ]
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '*',
      redirect: '/',
    },
  ]
})
