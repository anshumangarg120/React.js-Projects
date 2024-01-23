import axios from "../utils/Arios";
import React, { useEffect, useState } from 'react';

const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {

    axios
      .get("/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(()=>{
    getProducts()
  }, []);

  return (
    <>
      <button onClick={getProducts} className='px-5 py-2 bg-red-300 rounded m-5'>Call Product API</button>
      <hr />
      <ul>
        {products.length > 0 ? products.map((p) => (
          <li key={p.id} className='rounded w-auto p-5 m-5 bg-red-200'>
            {p.title}
          </li>
        )) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
 