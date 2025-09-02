import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'url'
import { splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        splitVendorChunkPlugin(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: { enabled: false },
            workbox: {
                navigateFallback: '/index.html',
                globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff2}']
            },
            manifest: {
                name: 'BabyTracker',
                short_name: 'BabyTracker',
                icons: [
                    {
                        src: '/web-app-manifest-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: '/web-app-manifest-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ],
                theme_color: '#A97C50',
                background_color: '#D9E5D9',
                display: 'standalone',
                orientation: 'portrait'
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
                api: 'modern-compiler'
            }
        }
    }
})
