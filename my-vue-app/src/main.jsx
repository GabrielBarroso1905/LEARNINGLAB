import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SingUp from './pages/Auth/SingUp'
import SingIn from './pages/Auth/SingIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SingUp/>
    {/* <SingIn/> */}
  </React.StrictMode>,
)
