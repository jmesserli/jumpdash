<template>
  <div>
    <selectable name="App Set" :selecting="appSets" :activeId="activeId" @select="selectAppSet"></selectable>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'dashboard',
    beforeRouteEnter(to, from, next) {
      Vue.http.get('/static/config.json').then((data) => {
        next(vm => vm.$store.commit('appSets', data.body));
      });
    },
    methods: {
      selectAppSet(set) {
        this.$router.push({name: 'envSelector', params: {appSet: set.id}});
      }
    },
    computed: {
      appSets() {
        return this.$store.state.appSets;
      },
      activeId() {
        return this.$route.params.appSet;
      }
    }
  };
</script>
