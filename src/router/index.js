import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EnvironmentSelector from '@/components/EnvironmentSelector'
import AppSelector from '@/components/AppSelector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: ':appSet',
          name: 'envSelector',
          component: EnvironmentSelector,
          children: [
            {
              path: ':env',
              name: 'appSelector',
              component: AppSelector
            }
          ]
        }
      ]
    }
  ]
})
