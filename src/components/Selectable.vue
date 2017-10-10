<template>
  <div>
    <h2>{{ name }}</h2>
    <div class="flex flex-wrap">
      <card v-for="selectItem in selecting" :key="selectItem.id" @clicked="select(selectItem)"
            :content="selectItem.name" :class="{active: active(selectItem)}"
            class="col-12 sm-col-6 md-col-3 lg-col-2 my1 border-box card"></card>
    </div>
  </div>
</template>

<style lang="scss">
  .card {
    cursor: pointer;

    &.active {
      text-decoration: underline;
    }
  }
</style>

<script>
  import ClickableColorCard from '@/components/ClickableCard.vue';

  export default {
    name: 'selectable',
    props: ['name', 'selecting', 'activeId'],
    methods: {
      select(item) {
        this.$emit('select', item);
      },
      active(item) {
        return item.id === this.activeId;
      }
    },
    components: {
      'card': ClickableColorCard
    }
  };
</script>
