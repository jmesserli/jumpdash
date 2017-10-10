<template>
  <div>
    <selectable name="Application" :selecting="selectableApps" @select="openApp"></selectable>
    <router-view/>
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
        this.$router.push({name: 'appOpener', params: {app: app.id}})
      }
    }
  }
</script>
