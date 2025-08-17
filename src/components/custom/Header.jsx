import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from '../ui/button';

function Header() {

    const {user,isSignedIn} = useUser();


  return (
    <div className='flex flex-col min-h-screen'>

    <div className='p-5 shadow-2xl flex justify-between' >

     
    

        {
            <img src={logo} alt=""  />
        }
        {
            isSignedIn?(<div className='flex space-x-3'>

                    <Link to={'/dashboard'}>
                    <Button variant= 'outline'>Dashboard</Button>
                    </Link>

                    <UserButton></UserButton>
                    </div>):
             <Link to={'/auth/sign-in'}>
             <Button>Get Started</Button>
             </Link>
        }
    </div>
        <div>

        <Outlet></Outlet>
        </div>
      
        </div>
  )
}

export default Header
