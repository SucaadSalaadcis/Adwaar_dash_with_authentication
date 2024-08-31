import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css'
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function ResetPassword() {
  
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate(); 
    const {token} = useParams();
    
    const handleSumbit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/reset-password/'+token, { password }).then((response) => {
            if (response.data.status) {
                toast.success('updated password')
                navigate('/login');
            }
            console.log(response.data);
        }).catch((err) => console.log(err));
    }
    // console.log(password);
    return (
        <div className='sign-up-container'>
            <form className='sign-up-form'
                onSubmit={handleSumbit}
            >
                <h2>Reset Password</h2>


               
                <label htmlFor='password' className='lbl'> New Password:</label>
                <input className='inp' type="password" autoComplete='off' placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button  id='btn'  type='submit' className='bg-cyan-950 text-white rounded-md px-6 py-2'>Send</button>
             
            </form>
        </div>
    )
}
