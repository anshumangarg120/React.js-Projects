import React, { useContext } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';

const Home = () => {
  const [products] = useContext(ProductContext);

  const {search} = useLocation();
  const category = decodeURIComponent( search.split("=") [1]);
  const getproductscategory = async () => {
    try {
      const {data} = await axios.get (`/products/category/${category}`);
    } catch (error) {

    }
  }

  return ( products ? 
    <>
      <Nav />
      <div className='w-[85%] p-5 pt-20 pl-20 flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto'>

            {products.map((p,i)=>  
            <Link key={p.id} 
            to={`/details/${p.id}`} 
            className='card p-5 border shadow-xl rounded w-[25%] h-[45vh] flex-col flex justify-center items-center'
            >
          <div
            className='hover:scale-105 duration-300 w-full h-[80%] bg-contain bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${p.image})` }}
          >
          </div>
          <h1 className='text-sm font-serif mt-2 hover:text-blue-400'>
           {p.title}
          </h1>
        </Link> )}

       
      </div>
    </> : <Loading/>
  );
};

export default Home;
