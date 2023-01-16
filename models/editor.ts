import EditorJS, { OutputData, API, BlockAPI } from '@editorjs/editorjs'

export type EditorConfig = {
  id: string
  data?: OutputData
  readOnly?: boolean
  onChange?: (api: API, block: BlockAPI) => void
  onUpload?: (file: File) => void
}

export type EditorManager = {
  id: string
  element: Element
  instance: EditorJS
}

export interface Editor {
  create: (config: EditorConfig) => Promise<EditorManager>
  getElementHtml: (editor: EditorManager) => Promise<string>
}
