import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className='w-[70%] flex justify-between items-center h-full  m-auto py-[10%] px-[5%]'>
     <img className=' object-contain w-[40%] h-auto' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
     <div className='content ml- pt-5  w-[40%]  ' >
      <h1 className='text-2xl font-semibold'> Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
      <h3 className='text-zinc-400 my-5'>men's clothing</h3>
      <h2 className= 'font-bold text-green-600 mb-3'>$ 200.34</h2>
      <p className=' font-light mb-9 '>our perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
      <Link className='rounded-lg  m-3 border-2 border-green-300 text-green-300 py-1 p-3 mt-2 '>Edit</Link>
      <Link className='rounded-lg m-3  border-2 border-red-300 text-red-300 py-1 p-3 mt-2 '>Delete</Link>

     </div>
    </div>
  );
};

export default Details;