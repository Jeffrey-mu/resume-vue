import HeadImgSetting from "~/components/resume/setting/HeadImgSetting.vue";
import SelfInfoSetting from "~/components/resume/setting/SelfInfoSetting.vue";
import SchoolSetting from "~/components/resume/setting/SchoolSetting.vue";
import SelfSetting from "~/components/resume/setting/SelfSetting.vue";
import SkillsSetting from "~/components/resume/setting/SkillsSetting.vue";
import { type Component } from "vue";
export const radius = ref<string>("50%");
export const model = ref<boolean>(false);
export const setModel = () => (model.value = !model.value);
export const setRadius = (boolean: boolean) => {
  radius.value = boolean ? "50%" : "0%";
};
export const visible = ref<boolean>(false);
export const setVisible = () => {
  visible.value = !visible.value;
};
export const childrenDrawer = ref<boolean>(false);
export const setChildrenDrawer = () => {
  childrenDrawer.value = !childrenDrawer.value;
};
export const collapseTitle = ref<string>("");
interface SelfProfileStateModel {
  name: string;
  tel: string;
  github: string;
  email: string;
  blog: string;
  position: string;
  showImg: boolean;
  radius: string;
}
export const SelfProfileState = ref<SelfProfileStateModel>({
  name: "myName",
  tel: "185****5387",
  github: "http://github.com/Jeffref-mu",
  email: "1115378579@qq.com",
  blog: "http://blog.com",
  position: "web开发",
  showImg: true,
  radius: "50%",
});
interface SettingListModel {
  header: string;
  showArrow: boolean;
  key: string;
  componentName: Component;
  collapsible?: string;
}
export const settingList: SettingListModel[] = [
  {
    header: "头像设置",
    showArrow: false,
    key: "0",
    collapsible: "disabled",
    componentName: HeadImgSetting,
  },
  {
    header: "个人信息",
    showArrow: true,
    key: "1",
    componentName: SelfInfoSetting,
  },
  {
    header: "教育背景",
    showArrow: true,
    key: "2",
    componentName: SchoolSetting,
  },
  { header: "自我介绍", showArrow: true, key: "3", componentName: SelfSetting },
  {
    header: "更多信息",
    showArrow: true,
    key: "4",
    componentName: HeadImgSetting,
  },
  {
    header: "个人作品",
    showArrow: true,
    key: "5",
    componentName: HeadImgSetting,
  },
  {
    header: "个人技能",
    showArrow: true,
    key: "6",
    componentName: SkillsSetting,
  },
  {
    header: "工作经历",
    showArrow: true,
    key: "7",
    componentName: HeadImgSetting,
  },
  {
    header: "项目经历",
    showArrow: true,
    key: "9",
    componentName: HeadImgSetting,
  },
];

interface SchoolStateModel {
  schoolName: string;
  start: string;
  end: string;
}
export const SchoolState = ref<SchoolStateModel[]>([
  { schoolName: "xxx学校", start: "2016-07-01", end: "2016-07-01" },
]);

export const activeKey = ref("0");
export const activeName = computed(() => {
  return settingList.find((item) => item.key === activeKey.value)?.header;
});
export const activeComponent = computed(() => {
  return settingList.find((item) => item.key === activeKey.value)
    ?.componentName;
});
export const SelfIntroduce =
  ref(`Focus on data visualization and analysis 😈 能力项：沟通协调能力、执行力
    自驱型前端工程师，三年多大型复杂产品开发经验，负责蚂蚁集团 BI 产品
    DeepInsight 的可视化建设，参与了从图表库到 BI
    产品力的一体化建设，对商业智能领域的数据可视化建设有较为丰富的经验。 参与
    AntV 团队开源项目 G2、G2Plot 的研发，目前是 G2Plot 的主要负责人`);
export const selfFilter = ["name", "showImg", "radius"];
interface PersonalSkillsStateModel {
  skill: string;
  level: number;
}
export const PersonalSkillsState = ref<PersonalSkillsStateModel[]>([
  {
    skill: "javascript",
    level: 5,
  },
]);
