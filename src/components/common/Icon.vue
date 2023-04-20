<script setup lang="ts">
const props = withDefaults(defineProps<{ icon: string; size?: string; color?: string }>(), {
  size: '16',
  color: '#666',
})

const style = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: `${props.color}`,
  }
})
</script>

<template>
  <i class="iconfont" :class="`icon-${icon}`" :style="style" />
</template>

<style lang="scss">

</style>
