import axios from "../utils/Arios";
import React from 'react';
import { useEffect, useState } from 'react';

const Services = () => {

  const [first, setFirst] = useState("This is normal data")
  const [second, setSecond] = useState("This is very large data");

  const getusers = () => {

    axios
      .get("/users")
      .then(users => {
        console.log(users);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getusers();
    console.log("Services component is created");

    return() => {
      console.log("Services component is deleted");
    }
  }, [second]);
  return (
  <div className='p-10'>
   <h1 className='p-2'>{first}</h1>
   <button onClick={()=> setFirst ("Normar Data has been change") } className='bg-red-200 rounded p-2 m-2'>Change Normal data</button>
   <hr/>

   <h1 className='p-2'>{second}</h1>
   <button onClick={()=> setSecond("Very large data has been change") } className='bg-blue-200 rounded p-2 m-2'>Change Very large data</button>
  </div>
  )
}

export default Services;
