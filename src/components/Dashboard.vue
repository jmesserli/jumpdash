<template>
  <div>
    <selectable name="AppSet" :selecting="appSets" @select="selectAppSet"></selectable>
    <selectable v-if="selectedAppSet" name="Environment" :selecting="selectableEnvironments" @select="selectEnv"></selectable>
    <selectable v-if="selectedAppSet && selectedEnvironment" name="Application" :selecting="selectableApps" @select="openApp"></selectable>
  </div>
</template>

<script>
import Selectable from '@/components/Selectable.vue'

export default {
  name: 'dashboard',
  created () {
    this.$http.get('/static/config.json').then((data) => { this.appSets = data.body })
  },
  data () {
    return {
      'selectedAppSet': null,
      'selectedEnvironment': null,
      'appSets': []
    }
  },
  methods: {
    setAppSets (sets) {
      this.appSets = sets
    },
    selectAppSet (set) {
      if (this.selectedAppSet === set) {
        return
      }
      this.selectedEnvironment = null
      this.selectedAppSet = set
    },
    selectEnv (env) {
      this.selectedEnvironment = env
    },
    openApp (app) {
      let template = this.selectedAppSet.urlTemplate
      template = template.replace('{app}', app.urlPart)
      template = template.replace('{env}', this.selectedEnvironment.urlPart)

      window.location.href = template
    }
  },
  computed: {
    selectableEnvironments () {
      if (this.selectedAppSet != null) {
        return this.selectedAppSet.environments
      }
      return null
    },
    selectableApps () {
      if (this.selectedEnvironment != null) {
        return this.selectedAppSet.apps
      }
      return null
    }
  },
  components: {
    'selectable': Selectable
  }
}

</script>
