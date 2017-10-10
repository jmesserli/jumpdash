<template>
  <div>
    <selectable name="Application" :selecting="selectableApps" @select="openApp"></selectable>
  </div>
</template>

<style>
</style>

<script>
  export default {
    computed: {
      selectableApps () {
        let appSetId = this.$route.params.appSet
        let appSet = this.$store.getters.appSet(appSetId)
        if (!appSet) {
          return null
        }

        return appSet.apps
      }
    },
    methods: {
      openApp (app) {
        let appSetId = this.$route.params.appSet
        let envId = this.$route.params.env
        let appSet = this.$store.getters.appSet(appSetId)
        let env = this.$store.getters.env(appSetId, envId)

        let template = appSet.urlTemplate.replace('{app}', app.urlPart)
        template = template.replace('{env}', env.urlPart)

        window.location.href = template
      }
    }
  }
</script>
