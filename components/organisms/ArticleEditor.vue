<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { BlockAPI } from '@editorjs/editorjs'
import { EditorManager, API, OutputData } from 'models/editor'
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Object,
    default: undefined
  }
})

const emit = defineEmits(['change', 'upload'])

const editor = ref()

onMounted(async () => {
  const editor = await useEditor().create({
    id: props.id,
    onChange: (api: API, block: BlockAPI) => {
      emit('change', {api, block})
    }
  })
})

</script>

<template>
  <div :id="id" />
</template>
