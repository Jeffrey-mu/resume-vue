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
  OperationType,
  getResumeData,
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
export const clipboard = (copyData: string) => {
  window.navigator.clipboard.writeText(copyData).then((_res) => {
    message.success('配置复制成功！')
  })
}

export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export function hexToRgb(hex: string, alpha = 1) {
  // 将 # 去掉
  hex = hex.replace('#', '')

  // 判断是否缩写
  if (hex.length === 3) {
    hex = hex.split('').map((h) => {
      return h + h
    }).join('')
  }

  // 将十六进制颜色码转换为RGB值
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // 返回RGB值
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
export function invertColors(hex: string) {
  // 将 # 去掉
  hex = hex.replace('#', '')
  hex = hex.split('').reverse().join('')
  // 返回RGB值
  return `#${hex}`
}
export const windowIsDefined = () => {
  try {
    return typeof window !== 'undefined'
  }
  catch (e) {
    return false
  }
}

export const getDevice = (): 'mobile' | 'pc' => {
  return windowIsDefined()
    && /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)
    ? 'mobile'
    : 'pc'
}

export function groupByCount(arr: any[], count: number): any[] {
  const groups: any[] = []
  let groupIndex = -1

  for (let i = 0; i < arr.length; i++) {
    if (i % count === 0) {
      groupIndex++
      groups[groupIndex] = []
    }
    groups[groupIndex].push(arr[i])
  }

  return groups
}

export function saveResumeData() {
  localStorage.setItem('resume', JSON.stringify(getResumeData()))
}
