import type { ComputedRef, Ref } from 'vue'
import { type Component, computed, ref } from 'vue'
// Template
import Template_1 from '~/components/resume/theme/Template_1.vue'
import Template_2 from '~/components/resume/theme/Template_2.vue'
import Template_3 from '~/components/resume/theme/Template_3.vue'
import Template_4 from '~/components/resume/theme/Template_4.vue'
enum TemplatesType {
  all,
  freshStudents,
  develop,
  operate,
  product,
  postgraduate,
  design,
}
export interface Templates {
  id: number
  template: Component
  type?: TemplatesType
  hide?: boolean
}
export const templates: Templates[] = [{
  template: Template_1,
  id: 1,
  type: TemplatesType.develop,
}, {
  template: Template_2,
  id: 2,
  type: TemplatesType.develop,
}, {
  template: Template_3,
  id: 3,
  type: TemplatesType.develop,
}, {
  template: Template_4,
  id: 4,
  type: TemplatesType.freshStudents,
}]
export function useTemplate(): [string[], Ref<number>, (index?: number | string) => boolean | undefined, ComputedRef<Templates[]>] {
  const activeTemplate = ref(0)
  const TemplatesTypeList = ['全部', '应届生', '技术开发', '运营', '产品', '考研复试', '设计']

  const templates_computed = computed(() => {
    return templates.map((item) => {
      item.hide = false
      if (!activeTemplate.value)
        item.hide = false
      else if (item.type !== activeTemplate.value)
        item.hide = true
      return item
    })
  })

  function changeTemplate(index?: number | string): boolean | undefined {
    if (typeof index !== 'number')
      return templates_computed.value.every(item => item.hide)
    activeTemplate.value = index
  }
  return [TemplatesTypeList, activeTemplate, changeTemplate, templates_computed]
}
