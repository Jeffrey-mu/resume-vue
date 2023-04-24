<script setup lang="ts">
import { unref as _unref } from 'vue'
import { currentColor } from '~/composables/resume'
init_state()
</script>

<template>
  <div flex="~ 1 justify-center" pb-10 class="page" ma>
    <template v-for="item in templates" :key="item.id">
      <component :is="item.template" v-if="theme === item.id" />
    </template>
    <Operation />
  </div>
  <Drawer />
  <ImportSetting />
</template>

<style lang="scss">
.page {

  .template {
    width: 790px;
    .ghost {
      opacity: .3;
    }

    .flip-list-move {
      transition: all 1s;
    }

    .sortable-chosen {
      border: 2px dashed v-bind(currentColor);
      background: #fff;
    }

    .handle {
      float: right;
      width: 25px;
      height: 25px;
      background: v-bind(currentColor);
      cursor: move;
      // position: absolute;
      // right: 10px;
      opacity: .8;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 790px) {
    .template {
      width: 95%;
      margin: 10px auto;
    }
  }

  .company {
    font-size: 17px;
    font-weight: 600;
  }

  .work_experience__position {
    font-size: 12px;
  }
}
ul, ol {
  list-style: disc outside none;
}
</style>
