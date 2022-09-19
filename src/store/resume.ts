import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ResumeStateModel } from '~/composables/resume'
export const useResumeStore = defineStore('resume', () => {
  const resumeState = ref<ResumeStateModel>()
  function setState(state: ResumeStateModel) {
    resumeState.value = state
  }
  return {
    setState,
    resumeState,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useResumeStore, import.meta.hot))
