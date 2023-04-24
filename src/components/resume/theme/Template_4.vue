<script setup lang="ts" name="template_4">
// const resume_list = ref(JSON.parse(JSON.stringify()))
const [resume_list_template1] = useTemplate4RefsList()
provide('draggable_list', resume_list_template1)
</script>

<template>
  <div class="content page template template_4" m-2>
    <div
      class="left vertical-text" :style="{ backgroundColor: currentColor }" style="font-family: fantasy;"
    >
      personal resume
    </div>
    <div class="right" mt-2 p-5>
      <ResumeDraggable />
    </div>
  </div>
</template>

<style scoped lang="scss">
.template {
  position: relative;
  overflow: hidden;

}

.template_4 {
  display: flex;

  .left {
    width: 40px;
    height: auto;
  }

  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: rgba(#fff, 0.3);
    line-height: 40px;
    padding-top: 20px;
    font-size: 20px;
    letter-spacing: -0.2rem;
    text-transform: uppercase;
  }

  .right {
    flex: 1;
    padding-left: 30px;
  }
}
</style>
