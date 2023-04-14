import type { DefinedComponent } from '@vue/test-utils/dist/types'
import type { Ref } from 'vue'
export function useSort(key: string, data: Ref<{ id: number; name: string; component: DefinedComponent }[]>) {
  if (localStorage.getItem(key)) {
    // @ts-expect-error
    const sort: number[] = JSON.parse(localStorage.getItem(key))
    data.value.sort((a, b) => sort.indexOf(a.id) - sort.indexOf(b.id))
  }
}
