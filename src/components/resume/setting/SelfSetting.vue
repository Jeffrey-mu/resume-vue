<script setup lang="ts" name="SelfSetting">
import {
  OperationType as Type,
  SelfIntroduce as s,
} from '~/composables/resume'
import { operationData } from '~/utils'
const { t } = useI18n()
const setSelfIntroduce = operationData(s)
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 1 }"
    :wrapper-col="{ span: 23 }"
    autocomplete="off"
  >
    <a-form-item
      v-for="(item, index) in s"
      :key="index"
      :label="index + 1"
      name=""
    >
      <div flex>
        <a-textarea
          v-model:value="s[index]"
          inline-block
          :rows="4"
          placeholder=""
          allow-clear
        />
        <a-button type="text" danger @click="setSelfIntroduce(Type.del, index)">
          {{ t('resume.operation.del') }}
        </a-button>
      </div>
    </a-form-item>
    <Button block @click="setSelfIntroduce(Type.add)">
      {{ t('resume.operation.del') }}
    </Button>
  </a-form>
</template>
