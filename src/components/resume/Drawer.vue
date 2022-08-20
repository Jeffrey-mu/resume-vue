<template>
  <a-drawer
    :visible="visible"
    class="custom-class"
    title=""
    placement="right"
    @close="setVisible"
  >
    <a-drawer
      :visible="childrenDrawer"
      title="Two-level Drawer"
      width="320"
      @close="setChildrenDrawer"
    >
    </a-drawer>
    <Collapse />
  </a-drawer>
</template>
<script setup lang="ts">
</script>

