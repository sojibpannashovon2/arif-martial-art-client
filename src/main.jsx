import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProvider>
        <div className='max-w-6xl mx-auto'>
          <RouterProvider router={router} />
        </div>


      </AuthProvider>
    </React.StrictMode>
  </QueryClientProvider>

)
