<script setup lang="ts">
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
  <a-modal v-if="visible" v-model:visible="visible" width="1000px" :title="t('SelectTheme')" @ok="ok">
    <div class="theme_box" flex>
      <div
        v-for="item in templates" :key="item.id" class="theme_card" :class="{ active: active === item.id }"
        @click="active = item.id"
      >
        <component :is="item.template" />
        <Button class="use_template_btn" @click="setTheme(item.id)">
          使用
        </Button>
      </div>
    </div>
  </a-modal>
</template>

<style lang="scss">
.theme_box {
  flex-wrap: wrap;
  justify-content: center;

  .theme_card {
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
