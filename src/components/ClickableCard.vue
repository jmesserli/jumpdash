<template>
  <div @click="click" class="bg-aqua navy">
    <p class="h3 center">{{ content }}</p>
  </div>
</template>

<script>
  export default {
    props: ['content'],
    methods: {
      click() {
        this.$emit('clicked');
      }
    }
  };
</script>
