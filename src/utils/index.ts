import {
  SelfProfileState,
  SchoolState,
  SelfIntroduce,
  PersonalSkillsState,
} from "~/composables/resume";
export function print() {
  window.print();
}
export const exportDataToLocal = (data: string | object, fileName: string) => {
  const content = typeof data === "string" ? data : JSON.stringify(data);
  const a = document.createElement("a");
  a.download = fileName;
  a.href = URL.createObjectURL(
    new Blob([content], { type: "application/json" })
  );
  a.click();
};
export const getConfig = () => {
  return {
    SelfProfileState: SelfProfileState.value,
    SchoolState: SchoolState.value,
    SelfIntroduce: SelfIntroduce.value,
    PersonalSkillsState: PersonalSkillsState.value,
  };
};
