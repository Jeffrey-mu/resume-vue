<script setup lang="ts">
</script>

<template>
  <Resume />
</template>

<style lang="scss">
.content {
  box-shadow: 1px 1px 6px 1px #ccc;
  overflow: auto;
  width: 790px;
  flex-shrink: 0;

  @media screen and (max-width: 790px) {
    width: 100%;
  }
}

.page {
  max-width: 100%;
}
body {
  -webkit-print-color-adjust: exact;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
