import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DrawerProvider, ThemeProvider } from './context/ui'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('#root not found')

// 与 vite base 保持一致；部署到子路径时只改 vite.config.ts 的 base 即可
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(container).render(
  <StrictMode>
    <BrowserRouter basename={basename || undefined}>
      <ThemeProvider>
        <DrawerProvider>
          <App />
        </DrawerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
