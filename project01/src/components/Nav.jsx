import React, { useContext } from 'react';
import { ProductContext} from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {

  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(
                  ${(Math.random()*255).toFixed()}, 
                  ${(Math.random()*255).toFixed()}, 
                  ${(Math.random()*255).toFixed()}, 
                  0.4)`
  }

  return (
  <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 '>
    <a 
    className='rounded-full border-2 border-red-300 text-red-300 py-1 px-3 mb-3 font-serif' 
    href='/create'
    >
      Add new product
    </a>
    <hr className='w-[80%] bg-red-300 h-0.5 mb-4'/>
    <h1 className='text-2xl w-[80%] font-serif font-bold mb-3' 
    >
      Category Filter
    </h1>
    <div className='w-[80%]  '>
      {distinct_category.map((c, i) => (
        <Link 
        key={i} 
        to={`/?category=${c}`} 
        className='mb-3 flex items-center font-serif  py-2 px-3 my-2 gap-1 ' 
        > 
        <span 
        style={{backgroundColor: color()}} 
        className='rounded-full  mr-2 w-[12px] h-[12px] flex justify-center  bg-blue-300'
        >
        </span>
        {c}
        </Link>
      ) )}     
    </div>
  </nav>
  )
};

export default Nav;
