import React from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import Register from './pages/Register'

import { Toaster } from 'react-hot-toast';
import AdminLaouts from './Layouts/AdminLaouts'
import UserLayout from './Layouts/UserLayout'
import PublicLayouts from './Layouts/PublicLayouts'
import DashboardLayout from './components/DashboardLayout'
import Charts from './pages/Charts'
import FormElements from './pages/FormElements'
import FormLayout from './pages/FormLayout'

import Users from './components/Users'
import Content from './pages/Content'

import ForgotPasword from './pages/ForgotPasword'
import ResetPassword from './pages/ResetPassword'



function App() {
  return (
    <div>
      <Routes>

        {/* nasted route */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* nasted route */}
        <Route path='/dashboard' element={<AdminLaouts />}>
          <Route index element={<DashboardLayout />} />
        </Route>

        {/* nasted dash route */}
        <Route path='/dashboard' element={<DashboardLayout />}>

          <Route path='content' element={< Content />} />
          <Route path='charts' element={<Charts />} />
          <Route path='formElements' element={<FormElements />} />
          <Route path='formLayout' element={<FormLayout />} />
          <Route path='users' element={<Users />} />
        </Route>

        {/* nasted route */}
        <Route path='/' element={<PublicLayouts />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/forgotPassword' element={<ForgotPasword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
    

      </Routes>
      <Toaster />
    </div>
  )
}

export default App