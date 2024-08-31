import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function ForgotPasword() {
    const [email, setEmail] = useState('');
    
    // In JavaScript, when we talk about instances, 
    // we are often referring to objects that have been created from a constructor function.
    const navigate = useNavigate(); // inistance tixraac
    
    const handleSumbit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/forgot-password', { email }).then((response) => {
            console.log(response);
            if (response.data.status) {
                toast.success('check your email for reset password link')
                navigate('/login');
            }
        }).catch((error) => {
            toast.error(error.response.data.message)
        });
    }
    // console.log(email);
    return (
        <div className='sign-up-container'>
            <form className='sign-up-form'
                onSubmit={handleSumbit}
            >
                <h2>Forget Password</h2>


                <label htmlFor='email' className='lbl'>Email:</label>
                <input className='inp' type="email" autoComplete='off' placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                />


                <button id='btn' type='submit' className='bg-cyan-950 text-white rounded-md px-6 py-2'>Send</button>
             
            </form>
        </div>
    )
}
