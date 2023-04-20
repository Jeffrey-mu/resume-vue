<script lang="ts" setup>
defineProps<{ tabList: string[]; active: number }>()
const change = defineEmits(['change'])
</script>

<template>
  <div class="radio-inputs">
    <label v-for="item, index in tabList" :key="item" class="radio" @click="change('change', index)">
      <input type="radio" name="radio" :checked="active === index">
      <span class="name">{{ item }}</span>
    </label>
  </div>
</template>

<style scoped>
.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
  margin: 0 20px;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 10px;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked+.name {
  background-color: #fff;
  font-weight: 600;
}

.radio-inputs .radio .name:hover {
  background-color: #fff;
  font-weight: 600;
}
</style>
