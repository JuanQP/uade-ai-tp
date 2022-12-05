import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import './index.css'
import { router } from './routes'

const theme: MantineThemeOverride = {
  breakpoints: {
    xs: 300,
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </MantineProvider>
  </React.StrictMode>
)
