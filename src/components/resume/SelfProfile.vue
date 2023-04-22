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
      <EditablePanel data_key="name" :data="s" />
      <div v-show="s.showImg" class="self-profile-img">
        <EditablePanel><img :src="SelfProfileState.avatar" alt="" h-20 :style="{ 'border-radius': s.radius }"></EditablePanel>
      </div>
    </div>
    <div flex class="self-profile-info">
      <div flex="~ wrap 1" class="self-profile-item">
        <p v-for="item in info" :key="item" w="35%" media="">
          <EditablePanel>
            <Icon :icon="MAPPING_TABLE[item]" mr-2 />
            <EditablePanel :data_key="item" :data="s" />
          </EditablePanel>
        </p>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
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

  .name_head {
    position: relative;

    h2,
    div {
      line-height: 50px;
      font-size: 35px;
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

.template_2,
.template_3 {
  .name_head {
    text-align: center;
    flex-direction: column-reverse;

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
