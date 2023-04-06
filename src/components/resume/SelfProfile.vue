<script setup lang="ts" name="SelfProfile">
import { SelfProfileState as s, selfFilter } from '~/composables/resume'
import type { SelfProfileStateModel } from '~/composables/resume'
const info = computed(() => {
  return Object.keys(s.value).filter(el => !selfFilter.includes(el)) as Array<keyof SelfProfileStateModel>
})
</script>

<template>
  <div class="self-profile_box">
    <div class="name_head" flex="~ " justify-between>
      <h2 text-4xl>
        {{ s.name }}
      </h2>
      <div v-show="s.showImg" class="SelfProfile-img">
        <img :src="SelfProfileState.avatar" alt="" w-20 h-20 :style="{ 'border-radius': s.radius }">
      </div>
    </div>
    <div flex class="self-profile-info">
      <div flex="~ wrap 1" class="self-profile-item">
        <p v-for="item in info" :key="item" lh-8 w="45%" media="">
          <img mx-1 inline-block :src="`/self/${item}.png`" alt="" width="16">
          <a :href="s[item] as string">{{ s[item] }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .self-profile_box {
    position: relative;
  }

  .self-profile-item p {
    width: 90%;
  }
}

.template_2 {
  .name_head {
    text-align: center;
    flex-direction: column-reverse;

    h2 {
      line-height: 40px;
    }

    .SelfProfile-img {
      display: flex;
      justify-content: center;
    }
  }

  .self-profile-info {
    .self-profile-item {
      p {
        width: 100%;
      }
    }
  }
}
</style>
