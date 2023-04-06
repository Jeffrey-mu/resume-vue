<script setup lang="ts" name="WorkExperience">
import { WorkExperienceState as W } from '~/composables/resume'
import type { WorkExperienceStateModel } from '~/composables/resume'
function keys(item: object, filter: string[], model: boolean) {
  return Object.keys(item).filter(el =>
    model ? filter.includes(el) : !filter.includes(el),
  ) as Array<keyof WorkExperienceStateModel>
}
function style(index: number): any {
  switch (index) {
    case 0:
      return { 'font-weight': 'bold' }
    case 1:
      return { 'color': '#777', 'margin-left': '10px' }
    case 2:
      return { 'flex': '1', 'text-align': 'right', 'color': '#777' }
  }
}
</script>

<template>
  <div v-for="(item, index) in W" :key="index" mb-3 class="work_experience">
    <div flex mb-1>
      <div v-for="(el, elIndex) in keys(item, ['desc'], false)" :key="el" :style="[style(elIndex)]" :class="`work_experience__${el}`">
        {{ item[el] }}
      </div>
    </div>
    <div v-for="el in keys(item, ['desc'], true)" :key="el">
      <p v-for="(text, index) in item[el]" :key="text">
        {{ index + 1 }}、{{ text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.work_experience__data {
    color: rgba(0,0,0,.45);
    font-size: 12px;
    margin-left: 8px;
    font-weight: 300;
}
</style>
