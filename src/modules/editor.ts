import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { type UserModule } from '~/types'
export const install: UserModule = ({ app }) => {
  app.component('Editor', Editor)
  app.component('Toolbar', Toolbar)
}
