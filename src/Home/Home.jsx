import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Home() {

  const {user,isLoaded,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to = {"/auth/sign-in"}/>
  }
  return (
    <div>

        <h1>This is Home Page</h1>
       
       
      
    </div>
  )
}

export default Home
