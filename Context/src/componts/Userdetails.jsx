import React from 'react'
import { useContext } from 'react';
import { userContext } from '../context/Context';
import { useNavigate, useParams } from 'react-router-dom';

const Userdetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {users} = useContext(userContext);
  console.log(users[id]);
  return (
    <div>
     <h1 className=' p-2 text-red-500 bg-zinc-200 rounded'>{users[id].username}</h1>
    <h3 className='my-3'>{users[id].email}</h3>
    <button className='bg-blue-300 rounded-lg px-3 py-1 ' onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}

export default Userdetails;

