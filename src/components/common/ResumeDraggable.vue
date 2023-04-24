<script setup lang="ts">
const draggable_list = inject('draggable_list')
</script>

<template>
  <draggable
    v-model="draggable_list" ghost-class="ghost" handle=".handle" tag="transition-group"
    :component-data="{ tag: 'handle', name: 'flip-list', type: 'transition' }"
  >
    <template #item="{ element }">
      <div>
        <i v-show="model" class="handle" i-carbon-move />
        <component :is="element.component" />
      </div>
    </template>
  </draggable>
</template>
