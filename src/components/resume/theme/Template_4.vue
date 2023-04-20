<script setup lang="ts" name="template_4">
// const resume_list = ref(JSON.parse(JSON.stringify()))
const [resume_list_template1, drag] = useTemplate4RefsList()
</script>

<template>
  <div mt-2 p-5 class="content page template template_4" m-2>
    <div class="svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          d="M0,288L60,245.3C120,203,240,117,360,106.7C480,96,600,160,720,170.7C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>
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
    <div class="svg svg_bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.template {
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;

  .svg {
    width: 790px;
    height: 200px;
    position: absolute;
    left: 0;
    z-index: -1;

    &:nth-child(1) {
      top: -20px;
    }

  }

  .svg_bottom {
    bottom: -30px;
  }
}
</style>
