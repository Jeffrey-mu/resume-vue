<script setup lang="ts" name="HeadImg">
import type { UploadProps } from 'ant-design-vue';
import { SelfProfileState as s } from '~/composables/resume'
import { getBase64 } from '~/utils'
const previewVisible = ref(false);
const previewTitle = ref('');

watch(() => s.value.fileList, async (file_array) => {
  if (!file_array?.length) return
  let file = file_array[0]
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  s.value.avatar = (file.url || file.preview) as string;
})
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};
const { t } = useI18n()
</script>

<template>
  <div class="clearfix">
    <a-upload v-model:file-list="s.fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card" @preview="handlePreview">
      <div v-if="s.fileList.length < 1">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="s.avatar" />
    </a-modal>
  </div>
  <div mb-2>
    {{ t("header.faces") }}：<a-switch v-model:checked="s.showImg" bg="#1890ff" />
  </div>
  <div>
    {{ t("header.radius") }}：<a-switch v-model:checked="s.radius" bg="#1890ff" checked-value="50%" un-checked-value="0" />
  </div>
</template>
