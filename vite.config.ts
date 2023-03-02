/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-02-28 12:38:36
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-02-28 22:25:29
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss-preset-env'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcss()]
    }
  },
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
