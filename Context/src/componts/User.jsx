import React from 'react'
import Userdetails from './Userdetails';
import { Link }  from 'react-router-dom'
import { useContext } from 'react';
import { userContext } from '../context/Context';

const User = () => {
  const { users, setusers } = useContext(userContext);
  return (
    <div className=''>
     <h1 className='text-3xl '>User List</h1>
     <div className='mt-10 flex-col flex'>
      {users.map((u) => (
         <Link key={u.id} to={`/user/${u.id}`}  className='bg-red-200 m-1 rounded p-1'>
          {u.username}
          </Link>
      ))}
     
     </div>
    </div>
  )
}

export default User;
