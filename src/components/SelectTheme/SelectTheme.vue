<script setup lang="ts">
import { useTemplate } from '~/composables/templates'
// import { useloading } from '~/composables/common'
const [TemplatesTypeList, activeTemplate, changeTemplate, templates_computed] = useTemplate()
// const [loading, , loadingOnce] = useloading()
//
// watch(templates_computed, () => {
//   loadingOnce()
// })
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
</script>

<template>
  <a-drawer
    :title="t('SelectTheme')"
    placement="top"
    :closable="false"
    :visible="visible"
    height="80vh"
    @close="ok"
  >
    <div flex gap-3 justify-center cursor-pointer mb-5>
      <ComTab :tab-list="TemplatesTypeList" :active="activeTemplate" @change="changeTemplate" />
    </div>
    <div class="theme_box" flex>
      <!-- <Loading :loading="loading" /> -->
      <ComCard v-for="item in templates_computed" :key="item.id" :style="{ display: item.hide ? 'none' : '' }" class="theme_card" :checked="active === item.id" @click="active = item.id; setTheme(item.id)">
        <component :is="item.template" />
      </ComCard>
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
    border-radius: 10px;
    .template {
      border-radius: 10px;
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
      border: 3px solid greenyellow;

    }
  }

}
</style>
