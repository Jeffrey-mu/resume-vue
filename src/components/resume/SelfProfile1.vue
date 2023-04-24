<script setup lang="ts" name="SelfProfile1">
import { unref as _unref } from 'vue'
import { SelfProfile as s } from '~/composables/resume'
import { hexToRgb } from '~/utils'
const SelfProfileFilter = inject('SelfProfileFilter') as string[] || []
SelfProfileFilter.push('name')
interface IconInfo {
  tel: string
  github: string
  email: string
  blog: string
  position: string
}
const info = computed(() => {
  return Object.keys(s.value).filter(item => !SelfProfileFilter.includes(item)) as Array<keyof IconInfo>
})
</script>

<template>
  <div class="self-profile_box" :style="{ borderColor: currentColor }">
    <div class="name_head" flex="~ " justify-between>
      <EditablePanel data_key="name" :data="s" />
    </div>
    <div flex class="self-profile-info">
      <div flex="~ wrap 1" class="self-profile-item">
        <p v-for="item in info" :key="item" w="40%" media="" flex>
          <EditablePanel>
            <Icon :icon="MAPPING_TABLE_ICON[item]" mr-2 :color="currentColor" />
            <span class="self-profile_key_label">
              {{ MAPPING_TABLE_LABEL[item] }}
            </span>
            <EditablePanel :data_key="item" :data="s" />
          </EditablePanel>
        </p>
      </div>
    </div>
    <Avatar style="position: absolute; right: 50px; top: 0px" b-rd />
  </div>
</template>

<style  lang="scss" scoped>
@media screen and (max-width: 790px) {
  .self-profile_box {
    position: relative;
  }

  .self-profile-item > p {
    width: 90%;
  }
}

.self-profile_box {
  padding: 20px;
  border-bottom: 3px solid black;
  position: relative;
}

.template {
  .self-profile-info {
    .self-profile-item {
      p {
        line-height: 25px;
      }

      .self-profile_key_label {
        &::after {
          content: "：";
        }
      }
    }
  }

  .name_head {
    position: relative;

    h2,
    div,
    p {
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
