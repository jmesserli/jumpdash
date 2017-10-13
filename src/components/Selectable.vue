<template>
  <div>
    <h2>{{ name }}</h2>
    <div class="flex flex-wrap mxn1 myn1">
      <div @click="select(selectItem)"
           class="col-12 sm-col-6 md-col-3 lg-col-2 px1 py1 border-box card bg-aqua navy"
           :class="{active: isActive(selectItem)}"
           v-for="selectItem in selecting"
           :key="generateIdIfAbsent(selectItem.id, selectItem[displayKey])">
        <p class="h3 center">{{ selectItem[displayKey] }}</p>
      </div>
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
  import {generateIdIfAbsent} from '../js/util.js';

  export default {
    name: 'selectable',
    props: {
      'name': {'type': String, 'required': true},
      'selecting': {'type': Array, 'required': true},
      'active': {'type': Object},
      'displayKey': {'type': String, 'default': 'name'},
      'additionalData': {'type': Object}
    },
    methods: {
      select(item) {
        this.$emit('select', {selected: item, additionalData: this.additionalData});
      },
      isActive(item) {
        return this.active && (generateIdIfAbsent(this.active.id, this.active[this.displayKey]) === generateIdIfAbsent(item.id, item[this.displayKey]));
      },
      generateIdIfAbsent: generateIdIfAbsent
    }
  };
</script>
