import React,{useContext} from 'react';
import AuthContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const context=useContext(AuthContext)
  const {token,logout,name}=context
  const navigate = useNavigate()

  
  

  const onClick=(e)=>{
    e.preventDefault();
    logout();
    navigate("/login")


  }
    
  return (
    <>
       <div className="w-full h-16 bg-gradient-to-t from-indigo-100 to-white text-black fixed top-0 z-10  px-3 flex items-center ">
        <div className="container mx-auto ">
            <nav className="my-4 flex items-center justify-between">
                <div><h1 className='font-bold text-lg'>{(name==="")?"MY NOTES":name.toUpperCase()+"'S NOTES"} </h1></div>
                <div><button className={` bg-rose-800 hover:opacity-95 hover:scale-105 text-white text-md border-2 border-black rounded-full w-24 h-10 ${(token===""||token===undefined)?'hidden':''}`} onClick={onClick}>Log-out</button></div>


            </nav>





        </div>




       </div>


       
    
      
    </>
  )
}

export default Nav
