<template>
  <div>
    <selectable name="Sets" :selecting="config" @select="selectRoot" :active="set"></selectable>

    <selectable v-for="(selectable, idx) in selectables" :key="generateIdIfAbsent(selectable.id, selectable.name)"
                :name="selectable.name" :selecting="selectable.items" :active="getActiveForDepth(idx)"
                @select="selectNext" :additionalData="{depth: idx}"></selectable>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Selectable from '@/components/Selectable';
  import {generateIdIfAbsent} from '../js/util';

  export default {
    name: 'dashboard',
    beforeRouteEnter(to, from, next) {
      Vue.http.get('/static/config.json').then((data) => {
        next(vm => {
          vm.config = data.body;
        });
      });
    },
    data() {
      return {
        config: [],
        set: {},
        depth: -2,
        selected: []
      };
    },
    methods: {
      selectRoot(data) {
        this.set = data.selected;
        this.depth = -1;
        this.selected = [];
      },
      selectNext(selectData) {
        this.depth = selectData.additionalData.depth;

        this.selected = this.selected.splice(0, this.depth);
        this.selected.push(selectData.selected);

        if (this.set.sets.length - 1 === this.depth) {
          this.resolveAndOpenUrl();
        }
      },
      resolveAndOpenUrl() {
        let url = this.selected[this.selected.length - 1].url;

        for (let i = this.selected.length - 1; i >= 0; i--) {
          let variables = this.selected[i].variables || {};
          for (let variable of Object.keys(variables)) {
            let regex = new RegExp(`{${variable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}}`, 'g');
            url = url.replace(regex, variables[variable]);
          }
        }

        window.location.href = url;
      },
      getActiveForDepth(depth) {
        return this.selected[depth];
      },
      generateIdIfAbsent: generateIdIfAbsent
    },
    computed: {
      selectables() {
        return (this.set.sets || []).slice(0, this.depth + 2);
      }
    },
    components: {
      'selectable': Selectable
    }
  };
</script>
