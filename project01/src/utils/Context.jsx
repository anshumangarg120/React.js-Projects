import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const Context = (props) => {
  const [product, setproducts] = useState(null);

  const getproducts = async () => {
    try {
           const {data} = await axios("/products");
           setproducts(data);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() =>{
    getproducts();
  }, []);

  return (
    <ProductContext.Provider value={[product, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context