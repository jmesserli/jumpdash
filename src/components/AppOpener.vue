<template></template>

<script>
  export default {
    created() {
      let appSetId = this.$route.params.appSet;
      let envId = this.$route.params.env;
      let appId = this.$route.params.app;

      let appSetPromise = this.watchStorePromise(this.$store.getters.appSetFn(appSetId));
      let envPromise = this.watchStorePromise(this.$store.getters.envFn(appSetId, envId));
      let appPromise = this.watchStorePromise(this.$store.getters.appFn(appSetId, appId));

      Promise.all([appSetPromise, envPromise, appPromise]).then(values => {
        let template = values[0].urlTemplate.replace('{app}', values[2].urlPart);
        template = template.replace('{env}', values[1].urlPart);

        window.location.href = template;
      });
    },
    methods: {
      watchStorePromise(getterFn) {
        return new Promise((resolve) => {
          if (!getterFn()) {
            const watcher = this.$store.watch(getterFn, (data) => {
              watcher();
              resolve(data);
            });
          } else {
            resolve(getterFn());
          }
        });
      }
    }
  };
</script>
