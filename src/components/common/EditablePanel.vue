<script setup lang="ts">
const { data, data_key } = defineProps<{ data?: any; data_key?: string | number; numberValue?: string }>()
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
    <div v-if="data_key !== undefined" class="editable_panel" :class="{ numberValue }" :data="numberValue">
      <!-- {{  ? `${Number(data_key) + 1}、` : '' }} -->
      <div
        :class="{ editable_panel_identifying: typeof data_key === 'number', contenteditable_div: model }"
        :contenteditable="model && !selectTheme" @blur="handleBlur" v-html="data[data_key]"
      />
    </div>
  </slot>

  <!-- </div> -->
</template>

<style lang="scss" scoped>
@mixin block {
  content: '';
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
 .numberValue {

    &::before {
      @include block;
       content: attr(data);
       transform: rotate(0deg);
       border: none;
    }
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
      outline: none;
    }

  }
}
</style>
