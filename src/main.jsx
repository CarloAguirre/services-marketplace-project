import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes/Routes'
import '../node_modules/bootstrap/dist/css/bootstrap.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
