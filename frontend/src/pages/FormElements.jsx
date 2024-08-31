import React from 'react'

export default function FormElements() {
  return (
    <div>
      <h1 className='font-semibold text-3xl ml-6 mt-4'>Form Elements</h1>
      <div className='flex mt-5'>
      {/* table 1 */}
        <div className="card shrink-0 w-full ml-6 max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <h3 className='font-bold'>Contact Form</h3>
            <div className="form-control">
              <label className="label">Name</label>
              <input  type="text" placeholder="your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">Age</label>
              <input  type="text" placeholder="your age" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">Gender</label>
              <input  type="text" placeholder="gender" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  type="text" placeholder="email" className="input input-bordered" required />
              {/* TODO: uploading image will be later */}
              <input type="file" className="file-input w-full max-w-xs" />

            </div>
            <div className="form-control mt-6">
              <button className="btn bg-neutral text-white">Send Message</button>
            </div>
          </form>
        </div>

        {/* table 2 */}
        <div className="card shrink-0 w-full h-[430px] max-w-sm shadow-2xl bg-base-100 ml-24">
          <form className="card-body">
            <h3 className='font-bold'>Sign Form</h3>

            <div className="form-control">
              {/* email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  type="text" placeholder="email" className="input input-bordered" required />
              {/* password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              
              <input  type="text" placeholder="password" className="input input-bordered" required />
              {/* TODO: uploading image will be later */}
              <input type="file" className="file-input w-full max-w-xs mt-4" />

            </div>
            <div className="form-control mt-6">
              <button className="btn bg-neutral text-white">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
