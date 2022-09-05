<script setup lang="ts" name="SchoolSetting">
import { SchoolState as s } from '~/composables/resume'

function keys(item) {
  return Object.keys(item)
}

const schoolName = 'schoolName'
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <template v-for="item in s">
      <a-form-item
        v-for="el in keys(item)"
        :key="el"
        :label="el === schoolName ? 'school' : el"
        :name="el"
      >
        <a-input v-if="el === schoolName" v-model:value="item[el]" />
        <a-date-picker
          v-else
          v-model:value="item[el]"
          value-format="YYYY-MM-DD"
        />
      </a-form-item>
    </template>
  </a-form>
</template>
