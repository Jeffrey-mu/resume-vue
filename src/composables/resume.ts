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
import { getDevice } from '~/utils'

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
  avatar: 'images/resume_avatar.jpg',
  fileList: [],
})
interface SelfProfileModel {
  name: DataModel
  tel: DataModel
  email: DataModel
  address: DataModel
  birthday: DataModel
}

interface DataModel {
  value: string
  style: { [key: string]: string }
}
export const SelfEvaluation = ref<DataModel[]>([{
  value: '作为一名应届生，我认为我具备一些优秀的特质和能力。首先，我具有很强的学习能力和适应能力，能够快速掌握新知识和技能，并且能够灵活运用它们解决问题。其次，我有较强的团队合作精神和沟通能力，善于与他人合作完成任务，并能够清晰地表达自己的想法和观点。此外，我注重细节，有良好的时间管理能力和责任心，能够高效地完成工作并保证质量。最后',
  style: {},
}])

interface InternshipExperienceModel {
  position: DataModel
  company: DataModel
  date: DataModel
  value: DataModel

}
export const InternshipExperience = ref<InternshipExperienceModel[]>([{
  date: {
    value: '2021-07——2022-03',
    style: {},
  },
  company: {
    value: '北京云上大陆科技',
    style: {},
  },
  position: {
    value: '暑假人事实习生',
    style: {},
  },
  value: {
    value: '企业级ERP系统具有非常重大的意义,能够帮助企业更好地对其资源计划进行即时管理井且预见未来资源需要,从而降低管理成本提高管理效率但是,由于ERP在我国企业中的使用范围还较小使用时间不长企业在使用ERP的过程中,必须加强对ERP风险控制、内部控制、全面预算管理等问题的研究,从而使ERP能在企业财务管理中发挥更大的作用',
    style: {},
  },

}])
export const ReceivedRewards = ref<DataModel[]>([
  {
    value: '学业类奖励：如优秀毕业生、学习进步奖、学科竞赛奖、学术论文奖等。',
    style: {},
  },
  {
    value: '社会活动类奖励：如志愿者服务奖、社团工作奖、创新创业大赛奖、文艺比赛奖等。',
    style: {},
  },
  {
    value: '专业技能类奖励：如计算机证书、外语等级考试证书、职业资格证书等。',
    style: {},
  },
  {
    value: '综合素质类奖励：如优秀学生干部、优秀班干部、先进个人、三好学生等。',
    style: {},
  },
  {
    value: '奖学金类奖励：如国家励志奖学金、校内各类奖学金、企业奖学金等。',
    style: {},
  },
])
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
  { schoolName: 'xxx学校  (软件工程)', start: '2016-07', end: '2016-07' },
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

export enum OperationType {
  del,
  add,
}
export const defaultColor = '#421491'
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
    resumeState && importDataForLocal(JSON.parse(resumeState))
  })
}
export function setCurrentColor(color: string) {
  currentColor.value = color
  localStorage.setItem('currentColor', color || '')
}
export const SelfProfile = ref<SelfProfileModel>({
  name: {
    value: '小兰花',
    style: { color: currentColor.value },
  },
  address: {
    value: '北京市朝阳区前门102',
    style: {},
  },
  tel: {
    value: '182****3211',
    style: {},
  },
  birthday: {
    value: '2000-02-31',
    style: {},
  },
  email: {
    value: '1115378579@163.com',
    style: {},
  },
})
export interface ResumeStateModel {
  PerjectState: PerjectStateModel[]
  WorkExperienceState: WorkExperienceStateModel[]
  PersonalSkillsState: PersonalSkillsStateModel[]
  SelfProfileState: SelfProfileStateModel
  SchoolState: SchoolStateModel[]
  SelfIntroduce: []
  OpenSourceProjectState: OpenSourceProjectStateModel[]
  SelfProfile: SelfProfileModel
  ReceivedRewards: DataModel[]
  InternshipExperience: InternshipExperienceModel[]
  SelfEvaluation: DataModel[]
}

export const getResumeData = () => {
  return {
    SelfProfileState: SelfProfileState.value,
    SchoolState: SchoolState.value,
    SelfIntroduce: SelfIntroduce.value,
    PersonalSkillsState: PersonalSkillsState.value,
    PerjectState: PerjectState.value,
    WorkExperienceState: WorkExperienceState.value,
    OpenSourceProjectState: OpenSourceProjectState.value,
    SelfProfile: SelfProfile.value,
    ReceivedRewards: ReceivedRewards.value,
    InternshipExperience: InternshipExperience.value,
    SelfEvaluation: SelfEvaluation.value,
  } as ResumeStateModel
}

export function importDataForLocal(data: ResumeStateModel) {
  SelfProfileState.value = data.SelfProfileState
  SchoolState.value = data.SchoolState
  SelfIntroduce.value = data.SelfIntroduce
  PersonalSkillsState.value = data.PersonalSkillsState
  PerjectState.value = data.PerjectState
  WorkExperienceState.value = data.WorkExperienceState
  OpenSourceProjectState.value = data.OpenSourceProjectState
  SelfProfile.value = data.SelfProfile
  ReceivedRewards.value = data.ReceivedRewards
  InternshipExperience.value = data.InternshipExperience
  SelfEvaluation.value = data.SelfEvaluation
}
