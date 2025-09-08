import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from '../ui/button'
import DarkModeToggle from './DarkModeTogglel.jsx' // import your toggle

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div id="np-head" className='flex flex-col h-[70px]'>
      <div className='p-5 shadow-2xl flex justify-between items-center'>
        <img src={logo} alt="" />

        <div className='flex items-center space-x-3'>
          {isSignedIn ? (
            <>
              <Link to={'/dashboard'}>
                <Button variant='outline' className="cursor-pointer">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <Link to={'/auth/sign-in'}>
              <Button>Get Started</Button>
            </Link>
          )}

          {/* Add Dark Mode Toggle at the end */}
          <DarkModeToggle />
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Header
