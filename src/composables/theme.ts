import type { DefinedComponent } from '@vue/test-utils/dist/types'
import type { Ref } from 'vue'
import { useSort } from '.'
import PersonalSkills from '~/components/resume/PersonalSkills.vue'
import SelfIntroduction from '~/components/resume/SelfIntroduction.vue'
import WorkExperience from '~/components/resume/WorkExperience.vue'
import ProjectExperience from '~/components/resume/ProjectExperience.vue'
import OpenSourceProject from '~/components/resume/OpenSourceProject.vue'
import School from '~/components/resume/School.vue'
import SelfProfile from '~/components/resume/SelfProfile.vue'
import SelfProfile1 from '~/components/resume/SelfProfile1.vue'
import ReceivedRewards from '~/components/resume/ReceivedRewards.vue'
import SelfEvaluation from '~/components/resume/SelfEvaluation.vue'
import InternshipExperience from '~/components/resume/InternshipExperience.vue'

type resume_list_template_type = Ref<{ id: number; name: string; component: DefinedComponent; props?: {} }[]>

export function useTemplate1RefsList() {
  const resume_list_template1 = ref([
    {
      id: 1,
      name: 'SelfProfile',
      component: SelfProfile,
    },
    {
      id: 2,
      name: 'PersonalSkills',
      component: PersonalSkills,
    },
    {
      id: 3,
      name: 'SelfIntroduction',
      component: SelfIntroduction,
    },
    {
      id: 4,
      name: 'WorkExperience',
      component: WorkExperience,
    },
    {
      id: 5,
      name: 'ProjectExperience',
      component: ProjectExperience,
    },
    {
      id: 6,
      name: 'OpenSourceProject',
      component: OpenSourceProject,
    },
    {
      id: 7,
      name: 'School',
      component: School,
    },
  ])
  return useTemplateRefsList('resume_list_template1_Symbol', resume_list_template1)
}

export function useTemplate2RefsList() {
  const resume_list_template2: resume_list_template_type = ref([
    {
      id: 1,
      name: 'SelfProfile',
      component: WorkExperience,
    },
    {
      id: 2,
      name: 'PersonalSkills',
      component: ProjectExperience,
    },
    {
      id: 3,
      name: 'SelfIntroduction',
      component: OpenSourceProject,
    },
  ])
  return useTemplateRefsList('resume_list_template2_Symbol', resume_list_template2)
}

export function useTemplate4RefsList() {
  const resume_list_template4 = ref([
    {
      id: 1,
      name: 'SelfProfile1',
      component: SelfProfile1,
    },
    {
      id: 7,
      name: 'School',
      component: School,
    },
    {
      id: 4,
      name: 'InternshipExperience',
      component: InternshipExperience,
    },
    {
      id: 4,
      name: 'ReceivedRewards',
      component: ReceivedRewards,
    },
    {
      id: 3,
      name: 'SelfEvaluation',
      component: SelfEvaluation,
    },

  ])
  return useTemplateRefsList('resume_list_template4_Symbol', resume_list_template4)
}
export function useTemplateRefsList(RESUME_LIST_TEMPLATE1_SYMBOL: string, resume_list_template: resume_list_template_type) {
  const drag = ref(false)
  onMounted(() => {
    setTemplate('', true)
  })
  resume_list_template.value.map(item => item.props = item.props ? item.props : {})
  watch(resume_list_template, (value) => {
    saveLocalStorage(value.map(item => item.id))
  }, {
    deep: true,
  })
  function setTemplate(value: any, sort = false) {
    if (sort)
      useSort(RESUME_LIST_TEMPLATE1_SYMBOL, resume_list_template)

    else
      resume_list_template.value = value
  }
  function saveLocalStorage(value: any) {
    localStorage.setItem(RESUME_LIST_TEMPLATE1_SYMBOL, JSON.stringify(value))
  }
  return [
    resume_list_template, drag,
  ]
}

interface ManageDisplayModel {
  [key: string]: boolean
}

export const ManageDisplay = ref<ManageDisplayModel>({
  PersonalSkills: true,
  SelfProfile: true,
  SelfIntroduction: true,
  WorkExperience: true,
  ProjectExperience: true,
  OpenSourceProject: true,
  School: true,
})

export function useManageDisplay() {
  const ManageDisplayLocalKey = 'ManageDisplay'
  onMounted(() => {
    const storedValue = localStorage.getItem(ManageDisplayLocalKey)
    if (storedValue !== null)
      ManageDisplay.value = JSON.parse(storedValue)
  })
  function setManageDisplay(key: string, value: boolean) {
    if (!Object.prototype.hasOwnProperty.call(ManageDisplay.value, key))
      return

    ManageDisplay.value[key] = value
    localStorage.setItem(ManageDisplayLocalKey, JSON.stringify(ManageDisplay.value))
  }
  return [ManageDisplay, setManageDisplay]
}
