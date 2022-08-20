<script setup lang="ts">
const activeKey = ref([0]);
const settingList = [
  { header: "头像设置", showArrow: false, key: 0, collapsible: "disabled" },
  { header: "个人信息", showArrow: true, key: 1 },
  { header: "教育背景", showArrow: true, key: 2 },
  { header: "自我介绍", showArrow: true, key: 3 },
  { header: "更多信息", showArrow: true, key: 4 },
  { header: "个人作品", showArrow: true, key: 5 },
  { header: "个人技能", showArrow: true, key: 6 },
  { header: "工作经历", showArrow: true, key: 7 },
  { header: "项目经历", showArrow: true, key: 8 },
];
</script>
<template>
  <a-collapse v-model:activeKey="activeKey" ghost>
    <a-collapse-panel
      v-for="{ header, key, showArrow } in settingList"
      :key="key"
      :header="header"
      :showArrow="showArrow"
    >
      <a-button @click="setChildrenDrawer">配置</a-button>
    </a-collapse-panel>
  </a-collapse>
</template>



