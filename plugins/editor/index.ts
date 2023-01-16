import { Editor } from '~~/models'

const editor : Editor = {
  create: async({ id, data, readOnly, onChange, onUpload }) => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Paragraph = (await import('@editorjs/paragraph')).default
    return new Promise((resolve, reject) => {
      // ツールの設定
      const tools = {
        paragraph: {
          class: Paragraph,
          inlineToolbar: ['link', 'bold', 'italic'],
          config: {
            placeholder: '本文を入力'
          }
        }
      }
      const element = self.document.getElementById(id) as Element

      // Editor.js のインスタンス生成
      const editor = new EditorJS({
        holder: id,
        tools,
        data,
        minHeight: 0,
        readOnly,
        onReady: () => resolve({
          id,
          element,
          instance: editor
        }),
        onChange
      })
    })
  },
  getElementHtml: async (editor) => {
    await editor.instance.readOnly.toggle(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    const element = editor.element.getElementsByClassName('codex-editor__redactor').item(0)
    const html = element?.outerHTML || ''
    await editor.instance.readOnly.toggle(false)
    if (!editor.instance.blocks.getBlocksCount()) {
      editor.instance.clear()
    }
    return html
  }
}


  export default defineNuxtPlugin(() => {
    return {
      provide: {
        editor
      }
    }
  })
