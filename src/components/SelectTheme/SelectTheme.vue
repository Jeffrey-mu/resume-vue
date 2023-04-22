<script setup lang="ts">
import { useTemplate } from '~/composables/templates'
import { groupByCount } from '~/utils/index'
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
const colors = ['#675D50',
  '#ABC4AA',
  '#F3DEBA',
  '#A9907E',
  '#FDF7C3',
  '#FFDEB4',
  '#FFB4B4',
  '#B2A4FF',
  '#A5D7E8',
  '#576CBC',
  '#19376D',
  '#0B2447',
  '#002B5B',
  '#1A5F7A',
  '#159895',
  '#57C5B6',
  '#A4BC92',
  '#B3C99C',
  '#C7E9B0',
  '#DDFFBB',
  '#C0DBEA',
  '#BA90C6',
  '#E8A0BF',
  '#FDF4F5',
  '#E74646',
  '#FA9884',
  '#FFE5CA',
  '#FFF3E2',
  '#FEF2F4',
  '#FCC8D1',
  '#FFABAB',
  '#D14D72',
  '#DAF5FF',
  '#B9E9FC',
  '#B0DAFF',
  '#FEFF86',
  '#FFE6C7',
  '#FFA559',
  '#FF6000',
  '#454545',
  '#577D86',
  '#569DAA',
  '#87CBB9',
  '#B9EDDD',
  '#F4EEE0',
  '#6D5D6E',
  '#4F4557',
  '#393646',
  '#FDE2F3',
  '#E5BEEC',
  '#917FB3',
  '#2A2F4F',
  '#4F200D',
  '#FF8400',
  '#FFD93D',
  '#F6F1E9',
  '#E3CCAE',
  '#B8621B',
  '#262A56',
  '#000000',
  '#E86A33',
  '#263A29',
  '#41644A',
  '#F2E3DB',
  '#EDC6B1',
  '#B7B7B7',
  '#7C96AB',
  '#BFCCB5',
  '#F45050',
  '#F9D949',
  '#F0F0F0',
  '#3C486B',
  '#D864A9',
  '#EBB02D',
  '#F7DB6A',
  '#7AA874',
  '#2F0F5D',
  '#0EA293',
  '#27E1C1',
  '#F5F3C1',
  '#F3E8FF',
  '#BACDDB',
  '#CE5959',
  '#89375F',
  '#77037B',
  '#210062',
  '#009FBD',
  '#F9E2AF',
  '#00FFCA',
  '#05BFDB',
  '#088395',
  '#0A4D68',
  '#98D8AA',
  '#F3E99F',
  '#F7D060',
  '#FF6D60',
  '#F15A59',
  '#ED2B2A',
  '#D21312',
  '#070A52',
  '#9384D1',
  '#C9A7EB',
  '#ECC9EE',
  '#FFDCB6',
  '#F6BA6F',
  '#6DA9E4',
  '#ADE4DB',
  '#FFEBEB',
  '#FFF9DE',
  '#FFD3B0',
  '#FF6969',
  '#A6D0DD',
  '#B0A4A4',
  '#957777',
  '#643A6B',
  '#5F264A',
  '#7C9070',
  '#9CA777',
  '#FEE8B0',
  '#F97B22']

const groupColor = groupByCount(colors, 4)
</script>

<template>
  <a-drawer :title="t('SelectTheme')" placement="top" :closable="false" :visible="visible" height="80vh" @close="ok">
    <div flex gap-3 justify-center cursor-pointer mb-5>
      <ComTab :tab-list="TemplatesTypeList" :active="activeTemplate" @change="changeTemplate" />
      <a-popover title="颜色选择" trigger="click">
        <template #content>
          <div flex class="theme_color_selection">
            <div v-for="groupItem, index in groupColor" :key="index" class="theme_color_selection_group" flex>
              <div
                v-for="item in groupItem" :key="item" :bg="item" class="theme_color_selection_item" :data="item"
                :style="{ background: item }" @click="setCurrentColor(item)"
              />
            </div>
          </div>
        </template>
        <Button>
          颜色选择
        </Button>
      </a-popover>
    </div>
    <div class="theme_box" flex>
      <!-- <Loading :loading="loading" /> -->
      <ComCard
        v-for="item in templates_computed" :key="item.id" :style="{ display: item.hide ? 'none' : '' }"
        class="theme_card" :checked="active === item.id" @click="active = item.id; setTheme(item.id)"
      >
        <component :is="item.template" />
      </ComCard>
    </div>
  </a-drawer>
</template>

<style lang="scss">
.theme_color_selection {
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 10px;

  .theme_color_selection_group {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    margin: auto;
    overflow: auto;
    gap: 10px;
    box-sizing: content-box;
  }

  .theme_color_selection_item {
    border-radius: 50%;
    width: 25%;
    height: 100%;
    cursor: pointer;

  }
}

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
