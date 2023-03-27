<script setup lang="ts" name="SelfIntroduction"></script>

<template>
  <div>
    <div v-for="(_, index) in SelfIntroduce" :key="index" flex>
      {{ index + 1 }}、
      <div v-html="SelfIntroduce[index]" />
    </div>
  </div>
</template>
