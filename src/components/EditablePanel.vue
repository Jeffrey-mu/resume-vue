<script setup lang="ts">
const { data, data_key } = defineProps<{ data?: any; data_key?: string | number }>()
// interface StringKeyObject<T> {
//   [key: string]: T
// }
const selectTheme = inject('selectTheme')
function handleBlur(e: Event) {
  const target = e.target
  if (target instanceof HTMLElement)
    data[data_key] = target?.innerHTML
}
</script>

<template>
  <slot>
    <div v-if="data_key !== undefined" class="editable_panel">
      <div class="diamond" />
      <!-- {{  ? `${Number(data_key) + 1}、` : '' }} -->
      <div
        :class="{ editable_panel_identifying: typeof data_key === 'number', contenteditable_div: model }"
        :contenteditable="model && !selectTheme" class="editable_panel_item" @blur="handleBlur" v-html="data[data_key]"
      />
    </div>
  </slot>

  <!-- </div> -->
</template>

<style lang="scss" scoped>
@mixin block {
  content: "";
  margin-right: 10px;
  display: inline-block;
  background: none;
  width: 10px;
  height: 10px;
  border-radius: 4px;
  border: 1px solid #aaa;
  transform: rotate(45deg);
}

div {
  display: inline-block;
}

.editable_panel {

  .editable_panel_identifying {
    &::before {
      @include block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgb(0, 0, 0);
    }

  }

  .contenteditable_div {
    transition: all .4s;
    box-sizing: border-box;

    &:focus,
    &:hover {

      &::before,
      &::after {
        @include block;
      }

      &::after {
        margin-left: 10px;
      }
    }

    &:focus-visible {
      // outline: 2px solid rgb(0, 255, 38);
      outline: none;
      // border: 1px #ccc dotted;
      // cursor: pointer;
      // padding: 10px;
      // background: #fff;
      // background: #111;
      // // color: v-bind(currentColor);
      // color: #fff;
      // font-size: 16px;
      // font-weight: 400;
      // z-index: 999;
      // border-radius: 10px;
      // min-width: 200px;
      // text-align: left;
    }

  }
}
</style>
