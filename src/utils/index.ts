/**
 * @Author WangJiaFeng
 * @Description 公共函数
 * @email 1115378579@qq.com
 * @Date 2022-08-22 11:38:43 星期一
 * @return
 */
import type { Ref } from 'vue'
import { message } from 'ant-design-vue'
import {
  OpenSourceProjectState,
  OperationType,
  PerjectState,
  PersonalSkillsState,
  type ResumeStateModel,
  SchoolState,
  SelfIntroduce
  , SelfProfileState,
  WorkExperienceState,
} from '~/composables/resume'
export const print = () => {
  window.print()
}
export const exportDataToLocal = (data: string | object, fileName: string) => {
  const content = typeof data === 'string' ? data : JSON.stringify(data)
  const a = document.createElement('a')
  a.download = fileName
  a.href = URL.createObjectURL(
    new Blob([content], { type: 'application/json' }),
  )
  a.click()
}
export const getConfig = () => {
  return {
    SelfProfileState: SelfProfileState.value,
    SchoolState: SchoolState.value,
    SelfIntroduce: SelfIntroduce.value,
    PersonalSkillsState: PersonalSkillsState.value,
    PerjectState: PerjectState.value,
    WorkExperienceState: WorkExperienceState.value,
    OpenSourceProjectState: OpenSourceProjectState.value,
  } as ResumeStateModel
}

export const operationData = (data: Ref) => {
  return (type: OperationType, index: number) => {
    let newData = JSON.parse(JSON.stringify(data.value[0]))
    if (typeof newData === 'string')
      newData = ''

    else
      newData = Object.keys(newData).map(k => (newData[k] = ''))

    if (type === OperationType.del)
      data.value.splice(index, 1)

    else
      data.value.push(newData)
  }
}
export const importDataToLocal = (data: ResumeStateModel) => {
  SelfProfileState.value = data.SelfProfileState
  SchoolState.value = data.SchoolState
  SelfIntroduce.value = data.SelfIntroduce
  PersonalSkillsState.value = data.PersonalSkillsState
  PerjectState.value = data.PerjectState
  WorkExperienceState.value = data.WorkExperienceState
  OpenSourceProjectState.value = data.OpenSourceProjectState
}
export const clipboard = (copyData: string) => {
  window.navigator.clipboard.writeText(copyData).then((_res) => {
    message.success('配置复制成功！')
  })
}

export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
