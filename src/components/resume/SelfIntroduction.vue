<script setup lang="ts" name="SelfIntroduction"></script>

<template>
  <div>
    <div v-for="(_, index) in SelfIntroduce" :key="index" flex>
      <Skeleton>
        {{ index + 1 }}、
        <div v-html="SelfIntroduce[index]" />
      </Skeleton>
    </div>
  </div>
</template>
