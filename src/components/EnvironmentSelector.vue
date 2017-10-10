<template>
  <div>
    <selectable name="Environment" :selecting="selectableEnvironments" @select="selectEnv"></selectable>
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
      selectableEnvironments() {
        let appSetId = this.$route.params.appSet;
        return this.$store.getters.envs(appSetId);
      }
    },
    methods: {
      selectEnv(env) {
        this.$router.push({name: 'appSelector', params: {env: env.id}});
      }
    }
  };
</script>
