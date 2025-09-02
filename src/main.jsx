import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { AppContenxtProvider } from './context/app.jsx'
import { Toaster } from 'react-hot-toast'
import { DialogProvider } from './context/dialog-provider.jsx'
import App from './App.jsx'
import './index.scss'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <AppContenxtProvider>
                <div>
                    <Toaster position="bottom-center" />
                </div>
                <DialogProvider>
                    <App />
                </DialogProvider>
            </AppContenxtProvider>
        </ClerkProvider>
    </StrictMode>
)

// Register service worker for PWA (only in production build)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .catch((err) => console.warn('SW registration failed', err))
    })
}
