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
        <Skeleton>
          {{ item.schoolName }}
        </Skeleton>
      </div>
      <div>
        <Skeleton>
          {{ item.start }}~{{ item.end }}
        </Skeleton>
      </div>
    </div>
  </div>
</template>
