import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Donationform from './Compontent/Donationform/Donationform.jsx'
import Project from './Compontent/Project/Project.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
        {path:'/', element:<Project />},
        {path:'/Donation', element:<Donationform />}
    ]
  },

 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
