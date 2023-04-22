import type { Ref } from 'vue'
import { ref } from 'vue'
export function useloading(): [Ref<boolean>, (value: boolean) => void, (time?: number) => void] {
  const loading = ref(false)

  function setLoading(value: boolean) {
    loading.value = value
  }

  function autoLoadingOnce(time = 400) {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, time)
  }
  return [loading, setLoading, autoLoadingOnce]
}
export interface MAPPING_TABLE_ICON_MODEL {
  tel: 'dianhua'
  github: 'github-fill'
  email: 'youxiang'
  blog: 'diqiu'
  position: 'position'
  birthday: 'shijian'
  address: 'dizhi'
  教育背景: 'xuexiao'
  荣获奖励: 'jiangli2'
  自我评价: 'ziwopingjia'
  实习经历: 'shixijingli'
}
export const MAPPING_TABLE_ICON: MAPPING_TABLE_ICON_MODEL = {
  tel: 'dianhua',
  github: 'github-fill',
  email: 'youxiang',
  blog: 'diqiu',
  position: 'position',
  birthday: 'shijian',
  address: 'dizhi',
  教育背景: 'xuexiao',
  荣获奖励: 'jiangli2',
  自我评价: 'ziwopingjia',
  实习经历: 'shixijingli',
}

export const MAPPING_TABLE_LABEL = {
  tel: '电话',
  github: 'github',
  email: '邮箱',
  blog: '博客',
  position: '职位',
  birthday: '生日',
  address: '地址',
}

export type KeyOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T]

export type MAPPING_TABLE_ICON_MODEL_KEY = KeyOfType<MAPPING_TABLE_ICON_MODEL, string>
