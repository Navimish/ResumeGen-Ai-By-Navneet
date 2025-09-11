import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from '../ui/button'
import DarkModeToggle from './DarkModeTogglel.jsx'
import { Home, Sparkles, FileText } from 'lucide-react'

function Header() {
  const { user, isSignedIn } = useUser();
  const navigate = useNavigate();

  return (
    <div id="np-head" className='flex flex-col min-h-[80px]'>
      {/* Main Navbar */}
      <nav 
        className='relative shadow-lg'
        style={{
          background: `linear-gradient(135deg, #7D79EB 0%, #9B96F0 50%, #B8B4F5 100%)`
        }}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
          }}
        ></div>
        
        <div className='relative px-6 py-4 flex justify-between items-center'>
          {/* Logo Section */}
          <div className='flex items-center space-x-3'>
            {/* Custom SVG Logo */}
            <div 
              className='backdrop-blur-sm rounded-xl p-2.5 border shadow-lg'
              style={{
                backgroundColor: 'rgba(255,255,255,0.25)',
                borderColor: 'rgba(255,255,255,0.3)'
              }}
            >
              <svg 
                className="w-8 h-8" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Document Background */}
                <rect x="4" y="6" width="20" height="24" rx="2" fill="white" fillOpacity="0.95"/>
                {/* Document Lines */}
                <rect x="7" y="9" width="14" height="2" rx="1" fill="#7D79EB"/>
                <rect x="7" y="13" width="10" height="1.5" rx="0.75" fill="#9B96F0"/>
                <rect x="7" y="16" width="12" height="1.5" rx="0.75" fill="#9B96F0"/>
                <rect x="7" y="19" width="8" height="1.5" rx="0.75" fill="#9B96F0"/>
                {/* Success Badge */}
                <circle cx="23" cy="9" r="4" fill="#10B981"/>
                {/* Checkmark */}
                <path d="M21 9L22.5 10.5L25 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-white text-xl font-bold tracking-tight'>
                Resume<span style={{color: 'rgba(255,255,255,0.8)'}}>Gen</span>
              </h1>
              <p className='text-white text-xs' style={{opacity: 0.75}}>AI-Powered Resumes</p>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className='flex items-center space-x-3'>
            {/* Home Button */}
            <Button 
              variant="ghost" 
              size="sm"
              className="cursor-pointer text-white hover:text-white transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
              onClick={() => navigate('/')}
            >
              <Home className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>


            {/* User Authentication */}
            {isSignedIn ? (
              <div className='flex items-center space-x-3'>
                <Link to={'/dashboard'}>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="cursor-pointer font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      color: '#7D79EB',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#6B67D9';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255,255,255,0.95)';
                      e.target.style.color = '#7D79EB';
                    }}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                
                {/* User Button with Custom Styling */}
                <div 
                  className='backdrop-blur-sm rounded-full p-1 border shadow-md'
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.25)',
                    borderColor: 'rgba(255,255,255,0.3)'
                  }}
                >
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard: "shadow-2xl border-purple-200"
                      }
                    }}
                  />
                </div>
              </div>
            ) : (
              <Link to={'/auth/sign-in'}>
                <Button 
                  size="sm"
                  className="font-semibold px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'white',
                    color: '#7D79EB',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#F8F7FF';
                    e.target.style.color = '#6B67D9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#7D79EB';
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Subtle Bottom Border */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
          }}
        ></div>
      </nav>

      {/* Page Content */}
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default Header