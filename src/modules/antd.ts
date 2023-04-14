import antd from 'ant-design-vue'
import { type UserModule } from '~/types'
import 'ant-design-vue/dist/antd.compact.css'
// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available

export const install: UserModule = ({ app }) => {
  app.use(antd)
}
