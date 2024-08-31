import React from 'react'
import Buttons from '../ReusibleComp/Buttons'
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';


export default function Header() {
  const user = useSelector((state) => state.Auth.user);
  // console.log(user);
  return (
    <>
      {/* header */}
      <div className="navbar bg-base-100 ml-1 shadow-lg sm:w-[980px] w-full">
        <div className="flex-1">
          <p className="  text-yellow-600 text-3xl"><span className='text-blue-950'>Welcome : </span>{user.name}</p>
          {/* <a className="btn  bg-yellow-400 text-white text-xl">Adwaar</a> */}
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="text-4xl rounded-full mt- ml-">
               <IoSettingsOutline/>
              </div>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

              <p className='mt-2 ml-8'>Language Change</p>
              <div className="justify-around">
                <div className='flex-row '>
                  <Buttons />
                </div>
                {/* <span className="badge"></span> */}
              </div>

              <div className='mt-3'>
                <li><a>Settings</a></li>
                <li><a>Contacts</a></li>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
