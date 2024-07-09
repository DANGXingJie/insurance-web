import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //自动加载组件样式
    vitePluginForArco({
      style: 'css',
    }),
    //自动导入组件
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    //按需加载组件
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  resolve: {
    //配置路径别名
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
})
