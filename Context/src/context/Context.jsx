import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

const  Context = (props) => {
  const [users, setusers] = useState([
      {    
    id: 0,
    email: "john@gmail.com",
    username: "raamraamram",
    password: "m38rmF$",
  },

    {     
    id: 1,
    email: "morrison@gmail.com",
    username: "anish",
    password: "83r5^_",
  },

    {     
    id: 2,
    email: "morrison@gmail.com",
    username: "kunal",
    password: "83r5^_",
  },

  ])


  return <userContext.Provider value={{users, setusers}}>{props.children}</userContext.Provider> ;
}

export default Context
