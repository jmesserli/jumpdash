<template>
  <div>
    <h2>{{ name }}</h2>
    <div class="flex flex-wrap mxn1 myn1">
      <card v-for="selectItem in selecting" :key="selectItem.id" @clicked="select(selectItem)"
            :content="selectItem.name" :class="{active: active(selectItem)}"
            class="col-12 sm-col-6 md-col-3 lg-col-2 px1 py1 border-box card"></card>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .myn1 {
    margin-top: -.5rem;
    margin-bottom: -.5rem;
  }

  .card {
    cursor: pointer;
    background-clip: content-box;

    &.active {
      background-color: var(--blue);
      color: var(--white);
    }
  }
</style>

<script>
  import ClickableCard from '@/components/ClickableCard.vue';

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
      'card': ClickableCard
    }
  };
</script>
