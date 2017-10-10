<template>
    <div :color="color" @click="click">
      <p class="h3 center">{{ content }}</p>
    </div>
</template>

<style scoped>
  div {
    background-color: #7FDBFF;
  }

  div:nth-child(2n) {
    background-color: #0074D9;
    color: white;
  }
</style>

<script>
export default {
  props: ['color', 'content'],
  methods: {
    click () {
      this.$emit('clicked')
    }
  }
}
</script>
