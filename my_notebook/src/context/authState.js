import React, { useState } from "react";
import AuthContext from './authContext';

const AuthState = (props) => {
    const [token,setToken] = useState("")
    const [name,setName]=useState("")
    const [success,setsuccess]=useState(false)

    const login = async (email,password)=>{
        const url ="http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
           
            
          },
          
          body:JSON.stringify({email,password})
        })

        const json = await response.json();
        
        
        
        setToken(json.authtoken)
        setsuccess(json.success)
        
        
        



    }

    const signin= async (name,email,password)=>{
     
        const url ="http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            
            
          },
          
          body:JSON.stringify({name,email,password})
        })

        const json=await response.json()
        setToken(json.authtoken)
        

    }

    const logout= ()=>{
        setToken("")
        setName("")
        setsuccess(false)
    }

    const getuser= async ()=>{
      const url ="http://localhost:5000/api/auth/getuser"
    
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" :token
          
          
        },
        
        
      })

      const json=await response.json()
      
      setName(json.name)
      
    }



  return (
    <AuthContext.Provider value={{token,login,signin,logout,name,getuser,success,setToken}}>
        {props.children}
    </AuthContext.Provider>
    
  )
}

export default AuthState;
