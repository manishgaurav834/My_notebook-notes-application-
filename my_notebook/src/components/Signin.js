import React,{useContext,useState} from 'react';
import AuthContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signin = () => {
    const context= useContext(AuthContext)
    const{signin,setToken,token} = context
    const [cred,setCred]= useState({name:"",email:"",password:""})
    const navigate=useNavigate();


    const onChange=(e)=>{
        setCred({...cred,[e.target.name]: e.target.value})


    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const url ="http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            
            
          },
          
          body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password})
        })

        const json=await response.json()
        setToken(json.authtoken)
        
        if(!json.success){
            alert("djfgsdjgfds")
        
        }
        else{
        navigate("/")
        }

    }

  return (
    <>
    <div className="top-28 flex flex-col items-center absolute w-full mx-4">
    <div className="font-bold text-xl sm:text-2xl my-2">Enter your Credentials</div>
        <div className="container mx-auto p-4 flex flex-col items-center border-2 border-black w-4/5 rounded-lg ">
       
        <form onSubmit={handleSubmit} className={`w-full my-3 `}>
        <label className="font-bold text-lg sm:text-xl my-4" htmlFor="name">Name</label><br/>
          <input type="text" id="name" name="name" className="active:bg-slate-400 p-2 h-10 rounded-xl w-full border-2 border-black my-4" onChange={onChange} value={cred.name}/><br/>
          <label className="font-bold text-lg sm:text-xl my-4" htmlFor="email">E-mail</label><br/>
          <input type="email" id="email" name="email" className="active:bg-slate-400 p-2 h-10 rounded-xl w-full border-2 border-black my-4" onChange={onChange} value={cred.email}/><br/>
          <label className="font-bold text-lg md:text-xl my-4" htmlFor="password">Password</label><br/>
          <input type="text" id="password" name="password" className="active:bg-slate-400 p-2 h-10 rounded-xl w-full border-2 border-black my-4" onChange={onChange} value={cred.password} required minLength={5} /><br/>
          <div className='flex gap-x-6'>
         <div className="flex w-full justify-center items-center">
         <input type="submit" value="Create" className="bg-indigo-600 hover:opacity-95 hover:scale-105 text-white text-sm md:text-xl lg:text-2xl font-bold rounded-xl w-full sm:w-2/5 border-2 mx-2 border-black   h-12 my-4 cursor-pointer"></input>
         <Link to="/login" className="hover:opacity-95 hover:scale-105 my-3 h-12  w-full sm:w-1/3 sm:mx-2 flex items-center md:text-xl lg:text-2xl justify-center font-bold bg-red-500 border-black border-2 text-white rounded-xl">Have an Account</Link>
         </div>
          </div>
        
        </form>




        </div>
       


    </div>
      
    </>
  )
}

export default Signin
