import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import axios from '../utils/Axios';

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      setProduct(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    product ? (
      <div className='w-[70%] flex justify-between items-center h-full m-auto py-[10%] px-[5%]'>
        <div key={product.id} className='flex justify-between items-center w-full'>
          <img className='object-contain w-[40%] h-auto' src={product.image} alt={product.title} />
          <div className='content ml- pt-5 w-[40%]'>
            <h1 className='text-2xl font-semibold'>{product.title}</h1>
            <h3 className='text-zinc-400 my-5'>{product.category}</h3>
            <h2 className='font-bold text-green-600 mb-3'>${product.price}</h2>
            <p className='font-light mb-9'>{product.description}</p>
            <Link className='rounded-lg m-3 border-2 border-green-300 text-green-300 py-1 p-3 mt-2'>Edit</Link>
            <Link className='rounded-lg m-3 border-2 border-red-300 text-red-300 py-1 p-3 mt-2'>Delete</Link>
          </div>
        </div>
      </div>
    ) : <Loading />
  );
};

export default Details;
