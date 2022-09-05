/**
 * @Author WangJiaFeng
 * @Description 简历状态
 * @email 1115378579@qq.com
 * @Date 2022-08-22 11:39:08 星期一
 * @return
 */
import { type Component } from 'vue'
import HeadImgSetting from '~/components/resume/setting/HeadImgSetting.vue'
import SelfInfoSetting from '~/components/resume/setting/SelfInfoSetting.vue'
import SchoolSetting from '~/components/resume/setting/SchoolSetting.vue'
import SelfSetting from '~/components/resume/setting/SelfSetting.vue'
import SkillsSetting from '~/components/resume/setting/SkillsSetting.vue'
import WorkExperienceSetting from '~/components/resume/setting/WorkExperienceSetting.vue'
import PerjectSetting from '~/components/resume/setting/PerjectSetting.vue'
export const radius = ref<string>('50%')
export const model = ref<boolean>(false)
export const setModel = () => (model.value = !model.value)
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
interface SelfProfileStateModel {
  name: string
  tel: string
  github: string
  email: string
  blog: string
  position: string
  showImg: boolean
  radius: string
}
export const SelfProfileState = ref<SelfProfileStateModel>({
  name: 'Jeffrey',
  tel: '185****5387',
  github: 'http://github.com/Jeffref-mu',
  email: '1115378579@qq.com',
  blog: 'http://blog.com',
  position: 'web开发',
  showImg: true,
  radius: '50%',
})
interface SettingListModel {
  header: string
  showArrow: boolean
  key: string
  componentName: Component
  collapsible?: string
}
export const settingList: SettingListModel[] = [
  {
    header: 'resume.setting.head',
    showArrow: false,
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
]

interface SchoolStateModel {
  schoolName: string
  start: string
  end: string
}
export const SchoolState = ref<SchoolStateModel[]>([
  { schoolName: 'xxx学校', start: '2016-07-01', end: '2016-07-01' },
])

export const activeKey = ref('0')
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
export const selfFilter = ['name', 'showImg', 'radius']
interface PersonalSkillsStateModel {
  skill: string
  level: number
}
export const PersonalSkillsState = ref<PersonalSkillsStateModel[]>([
  {
    skill: 'javascript',
    level: 5,
  },
])
interface WorkExperienceStateModel {
  company: string
  position: string
  date: string
  desc: string[]
}
export const WorkExperienceState = ref<WorkExperienceStateModel[]>([
  {
    company: 'xxxxxx 公司',
    position: ' 独立开发',
    date: '2021-21~2022-01',
    desc: [
      '具体功能',
      '运用了那些技术，技术难点是',
      '效果如何',
      'demo演示地址，github地址',
    ],
  },
  {
    company: 'xxxxxx 公司',
    position: ' 独立开发',
    date: '2021-21~2022-01',
    desc: [
      '具体功能',
      '运用了那些技术，技术难点是',
      '效果如何',
      'demo演示地址，github地址',
    ],
  },
])

interface PerjectStateModel {
  company: string
  position: string
  desc: string[]
}
export const PerjectState = ref<PerjectStateModel[]>([
  {
    company: '美团外卖 🐶',
    position: ' 技术总监',
    desc: [
      '具体功能',
      '运用了那些技术，技术难点是',
      '效果如何',
      'demo演示地址，github地址',
    ],
  },
  {
    company: '饿了么外卖 🐶',
    position: ' 切图仔',
    desc: [
      '具体功能',
      '运用了那些技术，技术难点是',
      '效果如何',
      'demo演示地址，github地址',
    ],
  },
  {
    company: '腾讯视频 🐶',
    position: ' 摸鱼程序员',
    desc: [
      '具体功能',
      '运用了那些技术，技术难点是',
      '效果如何',
      'demo演示地址，github地址',
    ],
  },
  {
    company: '微信 🐶',
    position: ' 写bug',
    desc: [
      '具体功能',
      '运用了那些技术，技术难点是',
      '效果如何',
      'demo演示地址，github地址',
    ],
  },
])
export interface ResumeStateModel {
  PerjectState: PerjectStateModel[]
  WorkExperienceState: WorkExperienceStateModel[]
  PersonalSkillsState: PersonalSkillsStateModel[]
  SelfProfileState: SelfProfileStateModel
  SchoolState: SchoolStateModel[]
  SelfIntroduce: []
}
export enum OperationType {
  del,
  add,
}
export const showImport = ref<boolean>(false)
