import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'


export default function PublicLayouts() {
  
  const user = useSelector((state) => state.Auth.user)
  const navigate = useNavigate()


  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/dashboard/content');  // Redirect admin to the admin-specific area
      } else {
        navigate('/');      // Redirect logged-in non-admin users to the general home page
      }
    }
  }, [user, navigate])
  return (
    <Outlet />
  )
}

// checks if your are a user or admin if you are a user redirect to home else to admin
