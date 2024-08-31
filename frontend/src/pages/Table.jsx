import React from 'react'
import { FaTrash } from "react-icons/fa";
export default function Table() {
    return (
     
        <div>
            <div className='flex items-center justify-between m-4'>
                <h5>All Users</h5>
                <h5>Total Users: 5</h5>
            </div>

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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="font-bold">Ali xusayn</div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ali@gamil.com
                                    <br />
                                </td>
                                <td>admin</td>
                                <td><button className='btn btn-xs bg-red-500 text-white'> <FaTrash /></button></td>

                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="font-bold">Cumar kaah </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    cumar@gamil.com
                                    <br />
                                </td>
                                <td>user</td>
                                <td><button className='btn btn-xs bg-red-500 text-white'> <FaTrash /></button></td>

                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="font-bold">Yasin salax </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    yasin@gamil.com
                                    <br />
                                </td>
                                <td>user</td>
                                <td><button className='btn btn-xs bg-red-500 text-white'> <FaTrash /></button></td>

                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="font-bold">Moha ali </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    mohar@gamil.com
                                    <br />
                                </td>
                                <td>admin</td>
                                <td><button className='btn btn-xs bg-red-500 text-white'> <FaTrash /></button></td>

                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="font-bold">Ismail cumar </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ismail@gamil.com
                                    <br />
                                </td>
                                <td>user</td>
                                <td><button className='btn btn-xs bg-red-500 text-white'> <FaTrash /></button></td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
