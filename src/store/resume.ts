import { acceptHMRUpdate, defineStore } from 'pinia'
export const useResumeStore = defineStore('resume', () => {
  const radius = ref('50%')
  function setRadius(boolean: boolean) {
    radius.value = boolean ? '50%' : '0%'
  }
  return {
    setRadius,
    radius,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useResumeStore, import.meta.hot))
