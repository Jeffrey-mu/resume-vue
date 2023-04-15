<script setup lang="ts">
const { data, data_key } = defineProps<{ data?: any; data_key?: string | number }>()
// interface StringKeyObject<T> {
//   [key: string]: T
// }
function handleBlur(e: Event) {
  const target = e.target
  if (target instanceof HTMLElement)
    data[data_key] = target?.innerHTML
}
</script>

<template>
  <!-- <div :class="{ skeleton_line: proview }"> -->
  <slot>
    <div v-if="data_key !== undefined" flex class="skeleton">
      {{ typeof data_key === 'number' ? `${Number(data_key) + 1}、` : '' }}
      <div :contenteditable="model" :class="{ contenteditable_div: model }" @blur="handleBlur" v-html="data[data_key]" />
    </div>
  </slot>

  <!-- </div> -->
</template>

<style lang="scss">
.skeleton {

  .contenteditable_div {
    transition: all .4s;
    &:hover {
      outline: none;
      border: 1px #ccc dotted;
      cursor: pointer;
      padding: 10px;
      background: #fff;
      background: #111;
      // color: v-bind(currentColor);
      color: #fff;
      padding: 10px;
      font-size: 16px;
      font-weight: 400;
      z-index: 999;
      border-radius: 10px;
      min-width: 200px;
      text-align: left;
      // outline: 2px solid rgb(0, 255, 38);

    }
    &:focus-visible{
      // outline: 2px solid rgb(0, 255, 38);
      outline: none;
    }

  }
}
</style>
