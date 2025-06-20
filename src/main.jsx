import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/index.jsx'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
