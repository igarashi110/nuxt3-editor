<script setup lang="ts">
onMounted(async () => {
  const EditorJS = (await import('@editorjs/editorjs')).default
  const editor = () => {
    new EditorJS({
      holder: 'editorjs'
    })
  }
  editor()
})

  // const editor = {
  //   create: ({ id, data, readOnly, onChange, onUpload }) => {

  //     return new Promise((resolve, reject) => {
  //       // ツールの設定
  //       const tools = {
  //         paragraph: {
  //           class: Paragraph,
  //           inlineToolbar: ['link', 'bold', 'italic', 'superscript', 'subscript', 'comment'],
  //           config: {
  //             placeholder: '本文を入力'
  //           }
  //         }
  //       }
  //       const element = self.document.getElementById(id) as Element

  //       // Editor.js のインスタンス生成
  //       const editor = new EditorJS({
  //         holder: 'editorjs',
  //         tools,
  //         data,
  //         minHeight: 0,
  //         readOnly,
  //         onReady: () => resolve({
  //           id,
  //           element,
  //           instance: editor
  //         }),
  //         onChange
  //       })
  //     })
  //   },
  //   getElementHtml: async (editor) => {
  //     await editor.instance.readOnly.toggle(true)
  //     await new Promise(resolve => setTimeout(resolve, 3000))
  //     const element = editor.element.getElementsByClassName('codex-editor__redactor').item(0)
  //     const html = element?.outerHTML || ''
  //     await editor.instance.readOnly.toggle(false)
  //     if (!editor.instance.blocks.getBlocksCount()) {
  //       editor.instance.clear()
  //     }
  //     return html
  //   }
  // }

</script>

<template>
  ああああ
  <div id="editorjs" />
</template>
