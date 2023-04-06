<script setup lang="ts" name="ProjectExperience">
import { PerjectState as W } from '~/composables/resume'
import type { PerjectStateModel } from '~/composables/resume'
import { hexToRgb } from '~/utils'
function keys(item: object, filter: string[], model: boolean) {
  return Object.keys(item).filter(el =>
    model ? filter.includes(el) : !filter.includes(el),
  ) as Array<keyof PerjectStateModel>
}
function style(index: number): any {
  switch (index) {
    case 0:
      return { 'font-weight': '600', 'flex': '1' }
    case 1:
      return {
        'color': '#ffff',
        'margin-left': '10px',
        'background-color': hexToRgb(currentColor.value, 0.7),
        'font-weight': '600',
        'text-align': 'right',
        'padding': '0 10px',
        'border-radius': '2px',
      }
  }
}
</script>

<template>
  <div v-for="(item, index) in W" :key="index" mb-3 class="project_experience">
    <div flex>
      <div
        v-for="(el, elIndex) in keys(item, ['desc'], false)" :key="el" :style="[style(elIndex)]"
        :class="`project_experience__${el} ${el}`"
      >
        <Skeleton>
          {{ item[el] }}
        </Skeleton>
      </div>
    </div>
    <div v-for="el in keys(item, ['desc'], true)" :key="el">
      <p v-for="(text, index) in item[el]" :key="text">
        <Skeleton>
          {{ index + 1 }}、{{ text }}
        </Skeleton>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.project_experience {
  .project_experience__position {
    line-height: 21px;
    font-size: 12px;
    height: 21px;
  }
}
</style>
