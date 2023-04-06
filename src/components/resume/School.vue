<script setup lang="ts" name="School"></script>

<template>
  <div class="school">
    <div v-for="(item, index) in SchoolState" :key="index" flex="~" justify-between>
      <div>
        <Skeleton>
          {{ item.schoolName }}
        </Skeleton>
      </div>
      <div class="school-date">
        <Skeleton>
          {{ item.start }}~{{ item.end }}
        </Skeleton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.school {
  .school-date {
    font-size: 10px;
    color: #777;
    line-height: 25px;
  }
}
</style>
