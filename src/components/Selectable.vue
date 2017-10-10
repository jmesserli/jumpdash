<template>
  <div>
    <h2>{{ name }}</h2>
    <div class="flex flex-wrap">
      <card v-for="selectItem in selecting" :key="selectItem.name" @clicked="select(selectItem)" :content="selectItem.name"
            class="col-12 sm-col-6 md-col-3 lg-col-2 px1 my1 border-box card"></card>
    </div>
  </div>
</template>

<style>
  .card {
    cursor: pointer;
  }
</style>

<script>
import ClickableColorCard from '@/components/ClickableColorCard.vue'

export default {
  name: 'selectable',
  props: ['name', 'selecting'],
  methods: {
    select (item) {
      this.$emit('select', item)
    }
  },
  components: {
    'card': ClickableColorCard
  }
}
</script>
