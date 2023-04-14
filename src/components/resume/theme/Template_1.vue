<script setup lang="ts" name="template_1">
// const resume_list = ref(JSON.parse(JSON.stringify()))
const [resume_list_template1, drag] = useTemplate1RefsList()

const { t } = useI18n()
</script>

<template>
  <div mt-2 p-5 class="content page template template_1" m-2>
    <draggable
      v-model="resume_list_template1" ghost-class="ghost" handle=".handle" tag="transition-group"
      :component-data="{ tag: 'handle', name: 'flip-list', type: 'transition' }" @start="drag = true" @end="drag = false"
    >
      <template #item="{ element }">
        <li>
          <i v-show="model" class="handle" i-carbon-move />
          <component :is="element.component" />
        </li>
      </template>
    </draggable>
    <div>
      <Divider :title="t('resume.setting.thank')" />
      {{ t('resume.setting.thankText') }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
