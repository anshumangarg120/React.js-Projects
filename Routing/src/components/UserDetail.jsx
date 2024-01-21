import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function UserDetail() {
  const {name} = useParams();
 const navigate = useNavigate ();

  const goBackHandler = () => {
    // navigate("/user");
    navigate(-1);
  }

  return (
    <div className='w-1/2 m-auto mt-10'>
    <h1 className='text-red-400 text-5xl mb-2'>User Detail</h1>
    <h1 className='text-3xl '>Hello, {name}</h1>
    <button onClick={goBackHandler} className=' mt-5 text-white px-3 py-2 bg-red-400 hover:bg-red-500'>
     Go Back
    </button>
    </div>
  )
}

export default UserDetail
