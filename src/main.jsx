import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routs/Routs.jsx'
import { ToastContainer } from 'react-toastify'
import BookProvider from './Component/shered/BookProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BookProvider>
    <RouterProvider router={router}>
          <App />
    </RouterProvider>
  </BookProvider>
    
      <ToastContainer />
  </StrictMode>,
)
