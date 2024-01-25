import React from 'react'

function Nav() {
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 '>
    <a className='rounded-full border-2 border-red-300 text-red-300 py-1 px-3 mb-3' href='/create'>Add new product</a>
    <hr className='w-[80%] bg-red-300 h-0.5 mb-4'/>
    <h1 className='text-2xl w-[80%] mb-3' >Category Filter</h1>
    <ul className='w-[80%]  '>
      <li className='mb-3 flex items-center  py-2 px-3 my-2 gap-1 ' > 
      <span className='rounded-full  mr-2 w-[15px] h-[15px] flex justify-center  bg-blue-300'></span>
      Cat 1
      </li>
      <li className='mb-3 flex items-center  py-2 px-3 my-2 gap-1 ' > 
      <span className='rounded-full  mr-2 w-[15px] h-[15px] flex justify-center  bg-blue-300'></span>
      Cat 2
      </li>
      <li className='mb-3 flex items-center  py-2 px-3 my-2 gap-1 ' > 
      <span className='rounded-full  mr-2 w-[15px] h-[15px] flex justify-center  bg-blue-300'></span>
      Cat 3
      </li>
      <li className='mb-3 flex items-center  py-2 px-3 my-2 gap-1 ' > 
      <span className='rounded-full  mr-2 w-[15px] h-[15px] flex justify-center  bg-blue-300'></span>
      Cat 4
      </li>
      </ul>
  </nav>
  )
}

export default Nav
