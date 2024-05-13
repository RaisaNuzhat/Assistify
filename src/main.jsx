import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from './firebaseprovider/FirebaseProvider.jsx'

import { HelmetProvider } from 'react-helmet-async'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    
    </FirebaseProvider>
  </React.StrictMode>,
)
