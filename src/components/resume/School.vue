<script setup lang="ts" name="School"></script>

<template>
  <div>
    <div
      v-for="(item, index) in SchoolState"
      :key="index"
      flex="~"
      justify-between
    >
      <div>
        {{ item.schoolName }}
      </div>
      <div>{{ item.start }}~{{ item.end }}</div>
    </div>
  </div>
</template>
