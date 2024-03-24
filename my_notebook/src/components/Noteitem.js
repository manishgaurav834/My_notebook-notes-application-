import React,{useContext} from 'react';
import noteContext from '../context/noteContext';
import editContext from '../context/EditContext';
import UpdateNote from './UpdateNote';


function Noteitem(props) {
    const context= useContext(noteContext);
    const context1= useContext(editContext);
    const {deletenote} = context;
    const {show,setShow}=context1;
   
  return (
    <>
    <div>
    <div className="flex flex-col gap-y-4   p-3  hover:scale-105 container mx-auto border-2 border-black rounded-sm bg-cover bg-center">
      <div className="flex flex-col" >
        <div><p className="text-lg font-bold">Title</p></div>
        <div><p className="">{props.note.title}</p></div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">Description</p>
        <p>{props.note.description}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold">Tag</p>
        <p>#{props.note.tag}</p>
      </div>
        <div className="flex gap-2 justify-between m-2">
            <button disabled={show.bool} className={`bg-red-800 border-2 border-black hover:opacity-95 hover:scale-105 cursor-pointer text-white w-20 h-12 rounded-full ${(show.bool)?'opacity-50':''}`} onClick={()=>{deletenote(props.note._id)}}>Delete</button>
            <button disabled={show.bool} className={`bg-blue-500 border-2 border-black hover:opacity-95 hover:scale-105 cursor-pointer text-white w-20 h-12 rounded-full ${(show.bool)?'opacity-50':''}`} onClick={()=>{setShow({bool:true,id:props.note._id})}}>Edit</button>
        </div>
    </div>
    </div>
    
    <UpdateNote note={props.note}/>
    
    </>
  )
}

export default Noteitem
