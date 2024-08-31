
import React, { useEffect, useState } from 'react'
import { deleteUser, get, put } from '../services/ApiEndPoints'

import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { FaTrash, FaUsers } from 'react-icons/fa';



export default function Users() {
    const user = useSelector((state) => state.Auth.user);
    const [users, setUsers] = useState('')



    // get user
    const GetUsers = async () => {
        try {
            const request = await get('/api/admin/getuser')
            const respnse = request.data
            if (request.status === 200) {
                setUsers(respnse.users)
                // console.log(respnse.users)
            }

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        GetUsers()
    }, []) // error users

    // delete user
    const handleDelet = async (id) => {
        try {
            const request = await deleteUser(`/api/admin/delet/${id}`)
            const response = request.data
            if (request.status === 200) {
                toast.success(response.message)
                console.log(response)
            }
            GetUsers()
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
            }
        }
    }

    const hangleMakeAdmin = async (user) => {
        try {
            const request = await put(`/api/admin/${user._id}`)
            const respnse = request.data
            toast(`${user.name} is now admin`)
             GetUsers();
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <div>
            <div className='flex items-center justify-between m-4'>
                <h5>All Users</h5>
                <h5>Total Users: {users.length}</h5>
            </div>


            <div>


                {/* table to display all users */}
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra md:w-[850px]">
                            {/* head */}
                            <thead className='bg-neutral text-white rounded-lg'>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>

                            <tbody>
                                {users && users.map((elem, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>

                                            <td>
                                                <div className="font-bold">{elem.name}</div>
                                            </td>
                                            <td>
                                                <div className="flex items-center">

                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='space-x-10'>
                                                {elem.email}
                                                <br />
                                            </td>

                                            <td>
                                                {
                                                    elem.role == 'admin' ? "Admin" : (
                                                        <button onClick={() => hangleMakeAdmin(elem)} className='btn btn-xs bg-indigo-500 btn-circle text-white'><FaUsers /></button>
                                                    )
                                                }
                                            </td>


                                            <td><button className='btn btn-xs bg-red-500 text-white' onClick={() => handleDelet(elem._id)}> <FaTrash /></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div >
    )
}
