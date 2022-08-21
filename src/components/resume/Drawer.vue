<template>
  <a-drawer
    :visible="visible"
    class="custom-class"
    title="配置界面"
    placement="right"
    @close="setVisible"
  >
    <a-drawer
      :visible="childrenDrawer"
      :title="activeName"
      width="320"
      @close="setChildrenDrawer"
    >
      <component :is="activeComponent"></component>
    </a-drawer>
    <Collapse />
  </a-drawer>
</template>
<script setup lang="ts"></script>
