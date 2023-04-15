<script setup lang="ts" name="Divider">
withDefaults(defineProps<{ title: string; hideLine?: boolean; showBG?: boolean }>(), { hideLine: false, showBG: false })
</script>

<template>
  <div flex :style="{ color: currentColor }" class="divider-com">
    <div
      text="17px" h-10 lh-10 class="divider-item__title divider-item__title_bg"
    >
      {{ title }}
    </div>
    <div flex="~ 1 col" justify-center class="divider——line">
      <p border="~" h="1px" ma-3 />
    </div>
  </div>
</template>

<style lang="scss">
.template_2 {
  .divider-item__title {
    font-size: 25px;
    margin: 5px 0;
  }
  &-left{
    .divider——line {
      display: none;
    }
  }
   &-right{
    .divider-item__title_bg {
    position: relative;
    font-size: 20px;
    line-height: 25px;
    height: 25px;
    padding: 0 20px;
    min-width: 30%;
    color: #fff;
    border-radius: 5px 0 0 5px;
    margin: 10px 0;
    background-color: v-bind(currentColor);
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

}

.template_3 {
  .template_3__left {

    .divider-item__title {
      color: #ffffff;
    }
  }

  .template_3__right {
    .divider-item {
      flex-direction: column;
      line-height: 20px;
      .divider-item__title {
        font-weight: 700;
      }

      p {
        margin: 0;
        margin-bottom: 10px;
        height: .1px;
        transform: scaleY(.5);
      }
    }
  }

}
</style>
