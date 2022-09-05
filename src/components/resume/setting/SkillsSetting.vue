<script setup lang="ts" name="SkillsSetting">
import { OperationType, PersonalSkillsState as s } from '~/composables/resume'
import { operationData } from '~/utils'
const { t } = useI18n()
const setPersonalSkillsState = operationData(s)
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <div v-for="(item, index) in s" :key="index">
      <a-form-item :label="t('resume.operation.skills')" name="">
        <a-input v-model:value="item.skill" placeholder="" />
        <div flex lh-4 mt-2 justify-around>
          {{ t('resume.operation.Proficiency') }}：<a-rate v-model:value="item.level" inline-block flex />
          <a-button
            type="text"
            lh-4
            danger
            @click="setPersonalSkillsState(OperationType.del, index)"
          >
            {{ t('resume.operation.del') }}
          </a-button>
        </div>

        <a-divider />
      </a-form-item>
    </div>
    <Button block @click="setPersonalSkillsState(OperationType.add, index)">
      {{ t('resume.operation.add') }}
    </Button>
  </a-form>
</template>
