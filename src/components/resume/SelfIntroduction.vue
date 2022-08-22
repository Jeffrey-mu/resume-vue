<script setup lang="ts" name="SelfIntroduction"></script>
<template>
  <div>
    <div flex v-for="(item, index) in SelfIntroduce" :key="index">
      {{ index + 1 }}、
      <div v-html="SelfIntroduce[index]"></div>
    </div>
  </div>
</template>
