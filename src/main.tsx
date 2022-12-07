import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import React from 'react'
import { AuthProvider } from 'react-auth-kit'
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
      <AuthProvider
        authType='cookie'
        authName='_auth'
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
)
