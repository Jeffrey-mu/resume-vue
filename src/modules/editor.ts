import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { type UserModule } from '~/types'
// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available

export const install: UserModule = ({ app }) => {
  app.component('Editor', Editor)
  app.component('Toolbar', Toolbar)
}
