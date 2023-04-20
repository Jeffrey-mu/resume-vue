<script setup lang="ts" name="SelfEvaluation">
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.SelfEvaluation')" />
  <div class="SelfEvaluation">
    <div v-for="(item, index) in SelfEvaluation" :key="index" flex="~" justify-between>
      <div>
        <EditablePanel :data="item" data_key="value" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SelfEvaluation {

}
</style>
