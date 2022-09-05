<script setup lang="ts" name="SelfProfile">
import { SelfProfileState as s, selfFilter } from '~/composables/resume'
const info = computed(() => {
  return Object.keys(s.value).filter(el => !selfFilter.includes(el))
})
</script>

<template>
  <div>
    <h2 text-4xl mb-3>
      {{ s.name }}
    </h2>
    <div flex>
      <div flex="~ wrap 1" class="SelfProfile">
        <p v-for="item in info" :key="item" lh-8 w="45%" media="">
          <img mx-1 inline-block :src="`/self/${item}.png`" alt="" width="16">
          <a href="">{{ s[item] }}</a>
        </p>
      </div>
      <div v-show="s.showImg" mr-20 class="SelfProfile-img">
        <img
          src="https://t7.baidu.com/it/u=2437883441,1459291069&fm=193&f=GIF"
          alt=""
          w-20
          h-20
          :style="{ 'border-radius': s.radius }"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 700px) {
  .SelfProfile p{
    width: 90%;
  }
  .SelfProfile-img {
    margin: 20px;
  }
 }
</style>
