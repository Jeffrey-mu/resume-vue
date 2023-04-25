<script setup lang="ts">
import type { IDomEditor } from '@wangeditor/editor'
import { uid } from 'uid'
import { useDraggable } from '@vueuse/core'
import { active_editable_panel_id } from '~/composables/editablePanel'
import { saveResumeData } from '~/utils'
const { data, data_key } = defineProps<{ data?: any; data_key?: string | number; numberValue?: string }>()
const toolbar = ref<HTMLElement | null>(null)
const { style } = useDraggable(toolbar, {
  initialValue: { x: 120, y: 10 },
})
const editorRef = shallowRef()
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const comid = uid(16)
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const onChange = (editor: IDomEditor) => {
}
const onBlur = (editor: IDomEditor) => {
  if (data_key !== undefined)
    setData(data, data_key, editor.getHtml())
  active_editable_panel_id.value = ''
  saveResumeData()
}
const onFocus = (editor: IDomEditor) => {
  active_editable_panel_id.value = comid
}
const selectTheme = inject('selectTheme')
function handleBlur(e: Event) {
  const target = e.target
  if (target instanceof EventTarget)
    // @ts-expect-error
    setData(data, data_key, target?.innerHTML)
}
function getData(data: object, data_key: string | number, key?: 'value') {
  // @ts-expect-error
  return typeof data[data_key] !== 'string' ? data[data_key][key] : data[data_key]
}
function setData(data: { [key: string]: string }, data_key: string | number, value: string) {
  data[data_key] = value
}
const valueHtml = computed(() => {
  if (data_key !== undefined)

    return typeof data[data_key] !== 'string' ? data[data_key].value : data[data_key] || ''

  return ''
})
function set_active_editable_panel_id() {
  if (isEditMode())
    active_editable_panel_id.value = comid
}
function isEditMode(): boolean {
  return model.value && !selectTheme
}
</script>

<template>
  <slot>
    <teleport to="#app">
      <Transition name="toolbaran">
        <div
          v-if="isEditMode() && active_editable_panel_id === comid"
          ref="toolbar" :style="style"
          style="position: fixed" class="toolbar"
        >
          <Toolbar
            style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig"
            mode="default"
          />
        </div>
      </Transition>
    </teleport>
    <div
      v-if="data_key !== undefined" class="editable_panel" :class="{ numberValue }"
      @click="set_active_editable_panel_id"
    >
      <!-- {{  ? `${Number(data_key) + 1}、` : '' }} -->
      <Editor
        v-if="isEditMode() && active_editable_panel_id === comid" ref="editable_panel_ref" v-model="valueHtml"
        style="height: auto; width: 100%; border: none;" :default-config="editorConfig" mode="default"
        @onCreated="handleCreated" @onChange="onChange" @onBlur="onBlur" @onFocus="onFocus"
      />
      <div
        v-if="!model || active_editable_panel_id !== comid"
        :class="{ editable_panel_identifying: typeof data_key === 'number', contenteditable_div: model, [`_${data_key}`]: true }"
        :contenteditable="isEditMode()" @blur="handleBlur" v-html="getData(data, data_key, 'value')"
      />
    </div>
  </slot>

  <!-- </div> -->
</template>

<style lang="scss">
.toolbaran-enter-from,
.toolbaran-leave-to {
  opacity: 0;
}

.toolbaran-enter-to,
.toolbaran-leave-from {
  opacity: 1;
}

.toolbaran-enter-active,
.toolbaran-leave-active {
  transition: opacity .5s ease;
}

.toolbar {
  z-index: 9999;
  background: rgba(144, 19, 254, 0.35);
  box-shadow: 0 8px 22px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2px;
  max-width: 750px;
  max-height: auto;
  height: auto;
  cursor: move;
  border-radius: 10px;
  user-select: none;
  resize: both;
  // overflow: hidden;
}
.w-e-bar {
  border-radius: 10px;
}

.w-e-hover-bar {
  display: none !important;
}

.w-e-text-container {
  width: 100%;
}

.w-e-text-container [data-slate-editor] {
  border: none !important;
}

.w-e-text-container [data-slate-editor] p {
  margin: 0 !important;
}

* {
  transition: all .2s;
}

.w-e-scroll {
  overflow: inherit !important;

  &>div {
    padding: 0 !important;
  }
}

@mixin block {
  content: '';
  margin-right: 10px;
  display: inline-block;
  background: none;
  width: 10px;
  height: 10px;
  border-radius: 4px;
  border: 1px solid #aaa;
  transform: rotate(45deg);
}

.editable_panel {
  display: inline-block;
  width: auto;

  p,
  div {
    display: inline-block;
  }

  &>div {
    width: 100%;
  }

  .editable_panel_identifying {

  }

  .contenteditable_div {
    transition: all .4s;
    box-sizing: border-box;

    &:hover {
      color: rgba(174, 30, 206, 0.974);
      cursor: text;
    }

    &:focus-visible {
      outline: none;
      text-decoration: underline;
    }

  }
}
</style>
