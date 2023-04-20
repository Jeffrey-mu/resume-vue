<script setup lang="ts" name="ReceivedRewards">
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.ReceivedRewards')" />
  <div class="ReceivedRewards">
    <div v-for="(item, index) in ReceivedRewards" :key="index" flex="~" justify-between>
      <div>
        <EditablePanel :data="item" data_key="value" :number-value="`${index + 1}、`" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ReceivedRewards {

}
</style>
