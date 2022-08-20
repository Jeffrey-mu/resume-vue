export const radius = ref<string>("50%")
export const setRadius = (boolean:boolean)  =>{
  radius.value = boolean ? "50%" : "0%"
}
export const visible = ref<boolean>(false)
export const setVisible = () => {
  visible.value = !visible.value
}
export const childrenDrawer = ref<boolean>(false)
export const setChildrenDrawer = () => {
  childrenDrawer.value = !childrenDrawer.value
}
export const collapseTitle = ref<string>("")
