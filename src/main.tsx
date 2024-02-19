import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Videomeet from './videomeet.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Videomeet/>
  </React.StrictMode>,
)
