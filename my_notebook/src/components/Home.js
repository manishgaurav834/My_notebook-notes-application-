import React,{useContext,useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/noteContext';
import editContext from '../context/EditContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import AuthContext from '../context/authContext';



function Home() {
    const context = useContext(noteContext)
    const {notes,fetchnotes} = context
    const con=useContext(editContext)
    const{show}=con
    const auth_context=useContext(AuthContext)
    const {token,getuser,success} =auth_context;
    const Navigate=useNavigate();
   

    useEffect(() => {
      
      
      if(token===""){
        Navigate("/login")
      }
      else{
        
        getuser()
      
      fetchnotes()
     
      }
      }
      // eslint-disable-next-line
    , []);
  return (
    <>
      <div className={`absolute top-16 py-8 w-full  bg-gradient-to-t from-violet-400 to-indigo-100`}>
        <div className={`container mx-auto flex flex-col items-center  `}>
        
        <div className={`w-2/3 ${(show.bool)?'opacity-30':''}`}><AddNote/></div>
        <div className={`w-2/3 m-2 text-xl font-bold ${(show.bool)?'opacity-30':''}`}><p>ALL NOTES</p></div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 m-4 gap-x-8 gap-y-6  `}>
          {notes.map((element,key) => {
            return (<div key={key}>
              <Noteitem
                note={element}
              />
              
              </div>
            );
          })}
        </div>
        </div>
    
        
      </div>
   </>
  );
}

export default Home
