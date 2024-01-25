import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Nav />
      <div className='w-[85%] p-5 pt-20 pl-20 flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto'>
        <Link to="/details/1" className='card p-5 border shadow-xl rounded w-[25%] h-[45vh] flex-col flex justify-center items-center'>
          <div
            className='hover:scale-105 duration-300 w-full h-[80%] bg-contain bg-no-repeat bg-center'
            style={{ backgroundImage: 'url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")' }}
          >
          </div>
          <h1 className='text-sm mt-2 hover:text-blue-400'>
            Lorem ipsum dolor sit amet.
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
