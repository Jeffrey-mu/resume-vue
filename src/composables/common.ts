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
