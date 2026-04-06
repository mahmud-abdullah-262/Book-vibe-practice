import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Layout from './Layout/Layout.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import BookPage from './Pages/BookPage/BookPage.jsx'
import ReadPage from './Pages/ReadPage/ReadPage.jsx'
import { router } from './Routs/Routs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </StrictMode>,
)
