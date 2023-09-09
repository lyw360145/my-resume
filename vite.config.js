import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [react(), svgr()],
    css: {
        // 预处理器配置项
        preprocessorOptions: {
            less: {
                math: "always",
            },
        },
    },
})