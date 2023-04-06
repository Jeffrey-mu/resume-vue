<script setup lang="ts">
const visible = ref(false)
const { t } = useI18n()

function changeModal(value: boolean) {
  visible.value = value
}
provide('proview', true)
const active = ref(1)

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
  <a-modal v-model:visible="visible" width="1000px" :title="t('SelectTheme')" @ok="ok">
    <div class="theme_box" flex>
      <div v-for="item in templates" :key="item.id" class="theme_card" :class="{ active: active === item.id }" @click="active = item.id">
        <component :is="item.template" />
      </div>
    </div>
  </a-modal>
</template>

<style lang="scss">
.theme_box {
  .theme_card {
    display: flex;
    justify-content: center;
    width: 250px;
    height: 390px;
    border-radius: 2px;
    border: 1px solid rgb(193, 192, 192);
    margin: 10px;
    transition: all .2s;

    .template {
      zoom: .3;
      overflow: hidden;
    }
  }

  .active {
    transition: all .2s;
    position: relative;
    border: 3px solid #5acc5c;
  }
}
</style>
