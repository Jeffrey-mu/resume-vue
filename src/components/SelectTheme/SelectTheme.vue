<script setup lang="ts">
import { useTemplate } from '~/composables/templates'
const [TemplatesTypeList, activeTemplate, changeTemplate, templates_computed] = useTemplate()
provide('selectTheme', true)
const visible = ref(false)
const { t } = useI18n()

function changeModal(value: boolean) {
  visible.value = value
}
provide('proview', true)
const active = ref<number>(1)

defineExpose({
  changeModal,
})
const [theme, setTheme] = useTheme()
active.value = theme.value

function ok() {
  setTheme(active.value)
  changeModal(false)
}
function activeTemplateSyle(index: number) {
  if (index === activeTemplate.value) {
    return {
      background: currentColor.value,
      color: '#fff',
    }
  }
  else {
    return {}
  }
}
</script>

<template>
  <a-drawer
    :title="t('SelectTheme')"
    placement="top"
    :closable="false"
    :visible="visible"
    height="70vh"
    @close="ok"
  >
    <ul flex gap-3 justify-center cursor-pointer>
      <li
        v-for="item, index in TemplatesTypeList"
        :key="item" p-1 px-3 b-rd b :style="activeTemplateSyle(index)" @click="changeTemplate(index)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="theme_box" flex>
      <div
        v-for="item in templates_computed" :key="item.id" class="theme_card" :class="{ active: active === item.id }"
        :style="{ display: item.hide ? 'none' : '' }" @click="active = item.id"
      >
        <component :is="item.template" />
        <Button class="use_template_btn" @click="setTheme(item.id)">
          使用
        </Button>
      </div>
      <a-empty v-if="!templates_computed.length" ma mt-20 />
    </div>
  </a-drawer>
</template>

<style lang="scss">
.theme_box {
  flex-wrap: wrap;
  justify-content: start;

  .theme_card {
    transition: all .2s;
    display: flex;
    justify-content: center;
    width: 250px;
    height: 390px;
    border-radius: 2px;
    border: 1px solid rgb(193, 192, 192);
    margin: 10px;
    transition: all .2s;
    position: relative;

    .template {
      zoom: .3;
      overflow: hidden;
      pointer-events: none;
    }

    .use_template_btn {
      width: 150px;
      border-radius: 20px;
      position: absolute;
      top: 80%;
      left: calc(50% - 75px);
      display: none;
    }

    &:hover {

      .use_template_btn {
        display: block;

      }

      transition: all .2s;
      border: 3px solid #5acc5c;

    }
  }

  .active {
    transition: all .2s;
    border: 3px solid #5acc5c;
  }
}
</style>
