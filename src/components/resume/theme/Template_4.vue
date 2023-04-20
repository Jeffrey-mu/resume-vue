<script setup lang="ts" name="template_4">
// const resume_list = ref(JSON.parse(JSON.stringify()))
const [resume_list_template1, drag] = useTemplate4RefsList()
</script>

<template>
  <div class="content page template template_4" m-2>
    <div class="left" :style="{ backgroundColor: currentColor }" />
    <div class="right" mt-2 p-5>
      <draggable
        v-model="resume_list_template1" ghost-class="ghost" handle=".handle" tag="transition-group"
        :component-data="{ tag: 'handle', name: 'flip-list', type: 'transition' }" @start="drag = true" @end="drag = false"
      >
        <template #item="{ element }">
          <li>
            <i v-show="model" class="handle" i-carbon-move />
            <component :is="element.component" />
          </li>
        </template>
      </draggable>
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
    height: 100%;
  }
  .right{
    flex: 1;
    padding-left: 30px;
  }
}
</style>
