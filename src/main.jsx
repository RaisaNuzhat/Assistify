import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from './firebaseprovider/FirebaseProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
