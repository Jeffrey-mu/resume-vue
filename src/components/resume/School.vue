<script setup lang="ts" name="School">
</script>
<template>
<div>
  <div flex="~" justify-between v-for="item,index in SchoolState" :key="index">
  <div>
    {{item.schoolName}}
  </div>
  <div>
    {{item.start}}~{{item.end}}
  </div>
</div>
</div>

</template>
