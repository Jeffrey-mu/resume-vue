<script setup lang="ts" name="SelfProfile">
import { unref as _unref } from 'vue'
import { SelfProfileState as s, selfFilter } from '~/composables/resume'
import { hexToRgb } from '~/utils'
interface IconInfo {
  tel: string
  github: string
  email: string
  blog: string
  position: string
}
const info = computed(() => {
  return Object.keys(s.value).filter(el => !selfFilter.includes(el)) as Array<keyof IconInfo>
})
function format(value: any) {
  return value || '#'
}
const MAPPING_TABLE = {
  tel: 'dianhua',
  github: 'github-fill',
  email: 'youxiang',
  blog: 'diqiu',
  position: 'position',

}
</script>

<template>
  <div class="self-profile_box">
    <div class="name_head" flex="~ " justify-between>
      <h2 text-4xl>
        <Skeleton data_key="name" :data="s" />
      </h2>
      <div v-show="s.showImg" class="self-profile-img">
        <Skeleton><img :src="SelfProfileState.avatar" alt="" w-20 h-20 :style="{ 'border-radius': s.radius }"></Skeleton>
      </div>
    </div>
    <div flex class="self-profile-info">
      <div flex="~ wrap 1" class="self-profile-item">
        <p v-for="item in info" :key="item" w="35%" media="">
          <Skeleton><Icon :icon="MAPPING_TABLE[item]" mr-2 /><a :href="format(s[item])">{{ s[item] }}</a></Skeleton>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 790px) {
  .self-profile_box {
    position: relative;
  }

  .self-profile-item p {
    width: 90%;
  }
}
.template {
   .self-profile-info {
    .self-profile-item {
      p {
        line-height: 25px;
      }
    }
  }
}
.template_1 {
  .name_head {
    position: relative;
    .self-profile-img {
      position: absolute;
      right: 100px;
      top: 30px;
    }
  }
}
.template_2, .template_3 {
  .name_head {
    text-align: center;
    flex-direction: column-reverse;

    h2 {
      line-height: 40px;
    }

    .self-profile-img {
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
.template_2 {
 .self-profile-info {
    .self-profile-item {
      .iconfont {
        color: v-bind(hexToRgb(currentColor, 0.8)) !important;
      }
    }
  }
}
</style>
