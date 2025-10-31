import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContenxtProvider } from './context/app.jsx'
import { Toaster } from 'react-hot-toast'
import { DialogProvider } from './context/dialog-provider.jsx'
import App from './App.jsx'
import './index.scss'
import './i18n';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppContenxtProvider>
            <div>
                <Toaster position="bottom-center" />
            </div>
            <DialogProvider>
                <App />
            </DialogProvider>
        </AppContenxtProvider>
    </StrictMode>
)

// Register service worker for PWA (only in production build)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .catch((err) => console.warn('SW registration failed', err))
    })
}
