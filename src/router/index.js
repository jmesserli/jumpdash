import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import EnvironmentSelector from '@/components/EnvironmentSelector';
import AppSelector from '@/components/AppSelector';
import AppOpener from '@/components/AppOpener';

Vue.use(Router);

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
              component: AppSelector,
              children: [
                {
                  path: ':app',
                  name: 'appOpener',
                  component: AppOpener
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
