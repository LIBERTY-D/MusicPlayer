import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserTheme } from './ThemesApi/UserTheme.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserTheme>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserTheme>
)
