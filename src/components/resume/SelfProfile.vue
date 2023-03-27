<script setup lang="ts" name="SelfProfile">
import { SelfProfileState as s, selfFilter } from '~/composables/resume'
import type { SelfProfileStateModel } from '~/composables/resume'
const info = computed(() =>{
  return Object.keys(s.value).filter(el => !selfFilter.includes(el)) as Array<keyof SelfProfileStateModel>
})
</script>

<template>
  <div class="SelfProfile_box">
    <h2 text-4xl mb-3>
      {{ s.name }}
    </h2>
    <div flex>
      <div flex="~ wrap 1" class="SelfProfile">
        <p v-for="item in info" :key="item" lh-8 w="45%" media="">
          <img mx-1 inline-block :src="`/self/${item}.png`" alt="" width="16">
          <a :href="s[item]">{{ s[item] }}</a>
        </p>
      </div>
      <div v-show="s.showImg" mr-20 class="SelfProfile-img">
        <img
          :src="SelfProfileState.avatar"
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
  .SelfProfile_box {
    position: relative;
  }
  .SelfProfile p{
    width: 90%;
  }
  .SelfProfile-img {
    position: absolute;
    right: 20px;
    top: 20px;
    margin: 0;
  }
 }
</style>
