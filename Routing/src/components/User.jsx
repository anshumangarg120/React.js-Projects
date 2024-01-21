import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
   <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-red-400 text-5xl mb-2'>User</h1>

    <div className='flex w-1/2 flex-col mt-5 '>
      <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400 "  to="/user/anish" >Anish</Link>
      <Link  className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400 " to="/user/hitesh" >Hitesh</Link>
      <Link  className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400 " to="/user/kunal" >Kunal</Link>
    </div>
    <hr/>
    <Outlet/>
   </div>
  )
}

export default User
