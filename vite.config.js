import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'


export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/cn-share-button.ts'),
      name: 'cn-share-button',
      // the proper extensions will be added
      fileName: 'cn-share-button',
    }
  },
  plugins: [dts()],
})