<script setup lang="ts" name="SelfSetting">
import {
  SelfIntroduce as s,
  OperationType as Type,
} from "~/composables/resume";
const { t } = useI18n();
import { operationData } from "~/utils";
const setSelfIntroduce = operationData(s);
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
      :label="index + 1"
      name=""
      v-for="(item, index) in s"
      :key="index"
    >
      <div flex>
        <a-textarea
          inline-block
          v-model:value="s[index]"
          :rows="4"
          placeholder=""
          allow-clear
        />
        <a-button type="text" danger @click="setSelfIntroduce(Type.del, index)"
          >{{t('resume.operation.del')}}</a-button
        >
      </div>
    </a-form-item>
    <Button block @click="setSelfIntroduce(Type.add)">{{t('resume.operation.del')}}</Button>
  </a-form>
</template>
