<script lang="ts" setup>
withDefaults(defineProps<{ width: string; height: string }>(), {
  width: '100px',
  height: '120px',
})
</script>

<template>
  <div class="resume_avatar" :style="{ width, height }">
    <img src="/images/resume_avatar.jpg" alt="">
  </div>
</template>

<style lang="scss">
.resume_avatar {
  padding: 5px;
  overflow: hidden;
  border: 1px #ccc solid;
  img {
    width: 100%;
    height: 100%
  }
}
</style>
