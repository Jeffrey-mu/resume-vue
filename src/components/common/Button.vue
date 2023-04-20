<script setup lang="ts" name="button">
import { unref as _unref } from 'vue'
import { hexToRgb } from '~/utils'
const emit = defineEmits(['click'])
</script>

<template>
  <button class="btn" mb-3 :style="{ background: hexToRgb(currentColor, .9) }" c-white @click="emit('click')">
    <slot />
  </button>
</template>

<style>
.btn {
 width: 130px;
 height: 40px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #171717;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
}

.btn:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px v-bind(hexToRgb(currentColor, .2)),
  0 15px 0 -4px v-bind(hexToRgb(currentColor, .4)),
  0 16px 10px -3px v-bind(hexToRgb(currentColor, .4));
}

.btn:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px v-bind(hexToRgb(currentColor, .2)),
  0 8px 0 -4px v-bind(hexToRgb(currentColor, .4)),
  0 12px 10px -3px v-bind(hexToRgb(currentColor, .4));
}
</style>
