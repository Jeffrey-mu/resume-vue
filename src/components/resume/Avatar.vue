<script lang="ts" setup>
withDefaults(defineProps<{ width: string; height: string }>(), {
  width: '100px',
  height: '120px',
})
</script>

<template>
  <div class="resume_avatar" :style="{ width, height }">
    <img src="https://avatars.githubusercontent.com/u/66287770?v=4" alt="">
  </div>
</template>

<style lang="scss">
.resume_avatar {
  // padding: 14px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%
  }
}
</style>
