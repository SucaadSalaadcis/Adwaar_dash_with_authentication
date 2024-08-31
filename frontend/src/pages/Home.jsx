import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndPoints';
import { logout } from '../redux/AuthSlice';

export default function Home() {

  const user = useSelector((state) => state.Auth.user)
  // console.log(user);

  const navigate = useNavigate();
  const disptach = useDispatch()

  const handleLogout = async () => {
    try {
      const request = await post('/api/auth/logout')
      const resspone = request.data
      if (request.status == 200) {
        disptach(logout())
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const goToDashboard = () => {
    navigate('/dashboard/content')
  }



  return (

    <>
      <h1 className='flex justify-center text-4xl font-bold mt-20 text-blue-700'>Home page</h1>
      <div className='flex justify-center mt-[80px] h-[300px] '>
        <div className="bg-red-100 w-96 shadow-2xl text-center pt-20">
          <h2 className='text-cyan-950 font-bold text-2xl'> Welcome, <span className='text-blue-700'>{user && user.name}</span></h2>
          {/* <button className='bg-cyan-950 text-white rounded-md px-6 py-2 mt-10' onClick={handleLogout}>Logout</button> */}
          {/* logout btn */}
          <button className='bg-cyan-950 text-white rounded-md px-6 py-2 mt-10' onClick={handleLogout}  >
            Logout
          </button>
          <br />
          {user && user.role == 'admin' ? <button className='bg-blue-700 text-white rounded-md px-6 py-2 mt-3' onClick={goToDashboard}>Go To Dashboard</button> : ''}
        </div>

      </div>
    </>

  )
}
