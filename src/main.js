// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Selectable from '@/components/Selectable.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    appSets: []
  },
  mutations: {
    appSets (state, appSets) {
      state.appSets = appSets
    }
  },
  getters: {
    appSet: (state) => (appSetId) => {
      if (!appSetId) return null
      return state.appSets.find((appSet) => appSet.id === appSetId)
    },
    envs: (state, getters) => (appSetId) => {
      let appSet = getters.appSet(appSetId)
      if (!appSet) return null
      return appSet.environments
    },
    env: (state, getters) => (appSetId, envId) => {
      if (!envId) return null
      let envs = getters.envs(appSetId)
      if (!envs) return null
      return envs.find(environment => environment.id === envId)
    },
    apps: (state, getters) => (appSetId) => {
      let appSet = getters.appSet(appSetId)
      if (!appSet) return null
      return appSet.apps
    },
    app: (state, getters) => (appSetId, appId) => {
      if (!appId) return null
      let apps = getters.apps(appId)
      if (!apps) return null
      return apps.find(app => app.id === appId)
    }
  }
})

Vue.component('selectable', Selectable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

