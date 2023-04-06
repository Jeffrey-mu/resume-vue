<script setup lang="ts" name="Divider">
withDefaults(defineProps<{ title: string; hideLine?: boolean; showBG?: boolean }>(), { hideLine: false, showBG: false })
</script>

<template>
  <div flex :style="{ color: currentColor }" class="divider-line">
    <div
      text="17px" h-10 lh-10 class="divider-line__title" :class="{ 'divider-line__title_bg': showBG }"
      :style="{ background: showBG ? currentColor : '' }"
    >
      {{ title }}
    </div>
    <div flex="~ 1 col" justify-center>
      <p v-show="!hideLine && !showBG" border="~" h="1px" ma-3 />
    </div>
  </div>
</template>

<style lang="scss">
.template_2 {
  .divider-line__title {
    font-size: 25px;
  }

  .divider-line__title_bg {
    position: relative;
    font-size: 20px;
    line-height: 25px;
    height: 25px;
    padding: 0 10px;
    width: 150px;
    color: #fff;
    border-radius: 5px 0 0 5px;
    margin: 20px 0;

    &::after {
      content: " ";
      display: block;
      width: 18.4px;
      height: 18.4px;
      background: #f2f2f2;
      position: absolute;
      right: -9px;
      top: 4px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>
