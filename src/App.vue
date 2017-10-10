<template>
  <div id="app">
    <h1>Jumpdash</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">
  @import "../node_modules/basscss/css/basscss.min.css";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  * {
    font-family: "Open Sans", sans-serif;
  }
</style>
