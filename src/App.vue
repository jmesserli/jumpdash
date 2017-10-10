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

  * {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
</style>
