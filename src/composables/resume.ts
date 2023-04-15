/**
 * @Author WangJiaFeng
 * @Description 简历状态
 * @email 1115378579@qq.com
 * @Date 2022-08-22 11:39:08 星期一
 * @return
 */
import type { Ref } from 'vue'
import { type Component } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import HeadImgSetting from '~/components/resume/setting/HeadImgSetting.vue'
import SelfInfoSetting from '~/components/resume/setting/SelfInfoSetting.vue'
import SchoolSetting from '~/components/resume/setting/SchoolSetting.vue'
import SelfSetting from '~/components/resume/setting/SelfSetting.vue'
import SkillsSetting from '~/components/resume/setting/SkillsSetting.vue'
import WorkExperienceSetting from '~/components/resume/setting/WorkExperienceSetting.vue'
import PerjectSetting from '~/components/resume/setting/PerjectSetting.vue'
import OpenSourceProjectSetting from '~/components/resume/setting/OpenSourceProjectSetting.vue'
import ThemeSetting from '~/components/resume/setting/ThemeSetting.vue'
import { getDevice, importDataToLocal } from '~/utils'
// Template
import Template_1 from '~/components/resume/theme/Template_1.vue'
import Template_2 from '~/components/resume/theme/Template_2.vue'
import Template_3 from '~/components/resume/theme/Template_3.vue'

export interface Templates {
  id: number
  template: Component
}
export const templates = [{
  template: Template_1,
  id: 1,
}, {
  template: Template_2,
  id: 2,
}, {
  template: Template_3,
  id: 3,
}]
// Template
export const radius = ref<string>('50%')
export const model = ref<boolean>(false)
export const setModel = () => {
  if (getDevice() === 'mobile') {
    message.info('移动端只提供查看功能，在线制作请前往 PC 端!')
    return
  }
  model.value = !model.value
}
export const setRadius = (boolean: boolean) => {
  radius.value = boolean ? '50%' : '0%'
}
export const visible = ref<boolean>(false)
export const setVisible = () => {
  visible.value = !visible.value
}
export const childrenDrawer = ref<boolean>(false)
export const setChildrenDrawer = () => {
  childrenDrawer.value = !childrenDrawer.value
}
export const collapseTitle = ref<string>('')
export interface SelfProfileStateModel {
  name: string
  tel: string
  github: string
  email: string
  blog: string
  position: string
  showImg: boolean
  radius: string
  avatar: string
  fileList: UploadProps['fileList']
}
export const SelfProfileState = ref<SelfProfileStateModel>({
  name: 'Jeffrey',
  tel: '185****5387',
  github: 'github.com/Jeffrey-mu',
  email: 'jeffrey.muc@gmail.com',
  blog: 'http://blog.com',
  position: 'web开发',
  showImg: true,
  radius: '50%',
  avatar: 'https://avatars.githubusercontent.com/u/66287770?v=4',
  fileList: [],
})
export interface SettingListModel {
  header: string
  showArrow: boolean
  key: string
  componentName: Component
  collapsible?: string
}
export const settingList: SettingListModel[] = [
  {
    header: 'settingTheme',
    showArrow: true,
    key: '-1',
    collapsible: 'disabled',
    componentName: ThemeSetting,
  },
  {
    header: 'resume.setting.head',
    showArrow: true,
    key: '0',
    collapsible: 'disabled',
    componentName: HeadImgSetting,
  },
  {
    header: 'resume.setting.self',
    showArrow: true,
    key: '1',
    componentName: SelfInfoSetting,
  },
  {
    header: 'resume.setting.education',
    showArrow: true,
    key: '2',
    componentName: SchoolSetting,
  },
  { header: 'resume.setting.introduction', showArrow: true, key: '3', componentName: SelfSetting },
  // {
  //   header: "更多信息",
  //   showArrow: true,
  //   key: "4",
  //   componentName: HeadImgSetting,
  // },
  // {
  //   header: "个人作品",
  //   showArrow: true,
  //   key: "5",
  //   componentName: HeadImgSetting,
  // },
  {
    header: 'resume.setting.skills',
    showArrow: true,
    key: '6',
    componentName: SkillsSetting,
  },
  {
    header: 'resume.setting.work',
    showArrow: true,
    key: '7',
    componentName: WorkExperienceSetting,
  },
  {
    header: 'resume.setting.project',
    showArrow: true,
    key: '9',
    componentName: PerjectSetting,
  },
  {
    header: 'resume.setting.openSourceProject',
    showArrow: true,
    key: '10',
    componentName: OpenSourceProjectSetting,
  },
]

export interface SchoolStateModel {
  schoolName: string
  start: string
  end: string
}
export const SchoolState = ref<SchoolStateModel[]>([
  { schoolName: 'xxx学校  (软件工程)', start: '2016-07.01', end: '2016-07.01' },
])

export const activeKey = ref('-1')
export const activeName = computed(() => {
  return settingList.find(item => item.key === activeKey.value)?.header
})
export const activeComponent = computed(() => {
  return settingList.find(item => item.key === activeKey.value)
    ?.componentName
})
export const SelfIntroduce = ref([
  '负责前端技术架构设计，探索Web前端与游戏前端技术结合领域，推进新技术在业务中落地',
  '主导并参与美团游戏项目的设计过程和方案调研，对技术方案、风险进行评审和分析',
  '深入理解业务，注重产品和用户体验，支持和推动业务的快速迭代发展',
  '具备良好学习能力、沟通能力、需求落地能力、数学及抽象思维能力、承压能力',
])
export const selfFilter = ['name', 'showImg', 'radius', 'avatar', 'fileList']
export interface PersonalSkillsStateModel {
  skill: string
  level: number
}
export const PersonalSkillsState = ref<PersonalSkillsStateModel[]>([
  {
    skill: 'PHP/Hack/Node',
    level: 5,
  },
  {
    skill: 'ThinkPHP/Yaf/Yii/Lavaral/LazyPHP',
    level: 5,
  },
  {
    skill: 'Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic',
    level: 5,
  },
  {
    skill: 'Bower/Gulp/SaSS/LeSS/PhoneGap',
    level: 5,
  },
  {
    skill: 'PHPUnit/SimpleTest/Qunit',
    level: 5,
  },
  {
    skill: 'SAE/BAE/AWS/微博开放平台/微信应用开发',
    level: 5,
  },
])
export interface WorkExperienceStateModel {
  company: string
  position: string
  date: string
  desc: string[]
}
export const WorkExperienceState = ref<WorkExperienceStateModel[]>([
  {
    company: 'JKL公司',
    position: ' 独立开发',
    date: '2021-21~2022-01',
    desc: [
      '我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快',
      '这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。',
      '这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。',
    ],
  },
  {
    company: 'xxxxxx 公司',
    position: ' 独立开发',
    date: '2021-21~2022-01',
    desc: [
      '我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快',
      '这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。',
      '这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。',
    ],
  },
])

export interface PerjectStateModel {
  company: string
  position: string
  desc: string[]
}
export const PerjectState = ref<PerjectStateModel[]>([
  {
    company: 'MNO项目',
    position: ' 技术总监',
    desc: [
      '我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快',
      '这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。',
      '这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。',
    ],
  },
  {
    company: 'PQR项目',
    position: ' 前端工程师',
    desc: [
      '我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快',
      '这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。',
      '这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。',
    ],
  },
  {
    company: '腾讯视频 🐶',
    position: ' 后端工程师',
    desc: [
      '我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快',
      '这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。',
      '这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。',
    ],
  },
])
export interface OpenSourceProjectStateModel {
  name: string
  github: string
  desc: string
  link: string
}
export const OpenSourceProjectState = ref<OpenSourceProjectStateModel[]>([
  {
    name: 'resume-vue',
    github: 'github.com/Jeffrey-mu/resume-vue',
    desc: '在线制作简历 支持导出、导入、打印PDF。',
    link: 'https://resume-vue.vercel.app/',
  },
  {
    name: 'STU',
    github: 'github.com/Jeffrey-mu/resume-vue',
    desc: '项目的简要说明，Star和Fork数多的可以注明',
    link: 'https://resume-vue.vercel.app/',
  },
])
export interface ResumeStateModel {
  PerjectState: PerjectStateModel[]
  WorkExperienceState: WorkExperienceStateModel[]
  PersonalSkillsState: PersonalSkillsStateModel[]
  SelfProfileState: SelfProfileStateModel
  SchoolState: SchoolStateModel[]
  SelfIntroduce: []
  OpenSourceProjectState: OpenSourceProjectStateModel[]
}
export enum OperationType {
  del,
  add,
}
export const defaultColor = '#111111'
export const showImport = ref<boolean>(false)
export const currentColor = ref(defaultColor)
export const theme = ref(2)

type ReturnEmptyArrowFunction<T> = (value: T) => void

export function useTheme(): [Ref<number>, ReturnEmptyArrowFunction<number>] {
  const setTheme: ReturnEmptyArrowFunction<number> = (value: number) => {
    theme.value = value
    localStorage.setItem('theme', `${value}`)
  }
  return [theme, setTheme]
}

export function init_state() {
  onMounted(() => {
    currentColor.value = localStorage.getItem('currentColor') || defaultColor
    const resumeState = localStorage.getItem('resume')
    theme.value = localStorage.getItem('theme') ? Number(localStorage.getItem('theme')) : 2
    resumeState && importDataToLocal(JSON.parse(resumeState))
  })
}
