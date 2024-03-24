import React,{useContext,useState} from 'react';
import noteContext from '../context/noteContext';


function AddNote() {
    const context = useContext(noteContext)
    const {addnote} =  context
    const [notes,SetNotes]= useState({title:"",description:"",tag:""})

    const handleSubmit= (e)=>{
      e.preventDefault();
      console.log(JSON.stringify(notes))

      addnote(notes.title,notes.description,notes.tag)
      SetNotes({title:"",description:"",tag:""})
    }

    const onChange=(e)=>{
      SetNotes({...notes, [e.target.name]:e.target.value})
         
    }

    
  return (
  
      
        <form onSubmit={handleSubmit} className="w-full my-3">
          <label htmlFor="title">Title</label><br/>
          <input type="text" id="title" name="title" className="active:bg-slate-400 p-2 w-full border-2 border-black" onChange={onChange} value={notes.title} required minLength={3} /><br/>
          <label htmlFor="description">Description</label><br/>
          <input type="text" id="description" name="description" className="active:bg-slate-400 p-2 w-full border-2 border-black" onChange={onChange} value={notes.description} required minLength={5} /><br/>
          <label htmlFor="tag">Tag</label><br/>
          <input type="text" id="tag" name="tag" className="active:bg-slate-400 p-2 w-full border-2 border-black" onChange={onChange} value={notes.tag} /><br/>
          <input type="submit" value="Add Note" className="bg-blue-600 border-2 border-black hover:opacity-95 hover:scale-105 text-white text-lg font-bold rounded-full w-36  h-10 my-4 cursor-pointer"></input>
        </form>
      
    
  );
}

export default AddNote
