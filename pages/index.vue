<script setup lang="ts">
import ArticleEditor from '@/components/organisms/ArticleEditor.vue'
const blocks = ref({})
const handleTextChange = async ({ api, block }) => {
  blocks.value = await api.saver.save()
  console.log(api)
  console.log(block)
}
</script>

<template>
  <ArticleEditor
    id="editorjs"
    @change="handleTextChange"
  />
</template>

<style>

</style>

