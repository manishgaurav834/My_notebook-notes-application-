import React,{useContext,useState} from 'react'
import editContext from '../context/EditContext'
import noteContext from '../context/noteContext'

const UpdateNote = (props) => {
    const con = useContext(noteContext)
    const {updatenote}= con
    const context= useContext(editContext)
    const {show,setShow} = context
    const [notes,setNote]= useState({title:props.note.title, description:props.note.description , tag:props.note.tag})


    const onChange=(e)=>{
        setNote({...notes,[e.target.name]:e.target.value})

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        updatenote(notes.title,notes.description,notes.tag,props.note._id)
        setShow({bool:false,id:""})

    }
  return (
    <>
    
    <div className={`container border-2 border-black m-auto z-30 fixed top-2 left-0 right-0  flex flex-col items-center justify-center  bg-white  p-2 ${(show.bool && show.id===props.note._id)?'':'hidden'}`}>
    <div className="text-xl font-bold">Edit Note</div>
    <form onSubmit={handleSubmit} className={`w-full my-3 ${(show.bool && show.id===props.note._id)?'':'hidden'} `}>
          <label className="font-bold text-xl" htmlFor="title">Title</label><br/>
          <input type="text" id="title" name="title" className=" w-full border-2 border-black" onChange={onChange} value={notes.title} required minLength={3} /><br/>
          <label className="font-bold text-xl" htmlFor="description">Description</label><br/>
          <input type="text" id="description" name="description" className="w-full border-2 border-black" onChange={onChange} value={notes.description} required minLength={5} /><br/>
          <label className="font-bold text-xl" htmlFor="tag">Tag</label><br/>
          <input type="text" id="tag" name="tag" className="w-full border-2 border-black" onChange={onChange} value={notes.tag} /><br/>
          <div className='flex gap-x-6'>
          <input type="submit" value="Save" className="bg-blue-600 text-white text-sm md:text-lg font-bold rounded-full w-36  h-10 my-4 cursor-pointer"></input>
          <button className="bg-red-600 text-white text-sm md:text-lg font-bold rounded-full w-36 h-10 my-4 cursor-pointer" onClick={()=>{setShow({bool:false,id:""})}}>Cancel</button>
          </div>
        
        </form>
    </div>
    
    
    </>
  )
}

export default UpdateNote
