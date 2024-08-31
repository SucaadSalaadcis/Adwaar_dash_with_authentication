import React, { useState } from 'react'

import { post } from '../services/ApiEndPoints';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const request = await post('/api/auth/register', { name, email, password });
      const response = request.data;
      if (request.status == 200) {
        toast.success(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-200 to-cyan-950 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl text-cyan-900 font-semibold">Sign up </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="name" name="name" type="text" autoComplete='off'
                    onChange={(e) => setName(e.target.value)}
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name " />

                </div>
                <div className="relative">
                  <input id="email" name="email" type="text" autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email " />

                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                </div>
                <p>If you have an account.Please <Link to={'/login'} className='text-blue-700 underline'>Login</Link>Here</p>
                <div className="relative">
                  <button className="bg-cyan-950 text-white rounded-md px-6 py-2">Sign up</button>
                </div>
              </form>
            </div>
            <hr />


          </div>
        </div>
      </div>
    </div>

  )
}
