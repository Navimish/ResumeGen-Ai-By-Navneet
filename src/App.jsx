import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { AppRoutes } from './Routes/AppRoutes'
import Test from './Test'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner.jsx'

function App() {
  

  return (

    <>

    <Toaster></Toaster>
    
    <AppRoutes></AppRoutes>

    {/* <Test></Test> */}
    
    </>
 
  )
}

export default App
