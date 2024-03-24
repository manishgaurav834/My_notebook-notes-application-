import React, { useState,useContext } from "react";
import NoteContext from "./noteContext";
import AuthContext from "./authContext";

const NoteState = (props)=>{
    const context = useContext(AuthContext);
    const {token} = context;
    

    const [notes,setNotes] = useState([])
    

    const fetchnotes = async ()=>{
      const url ="http://localhost:5000/api/notes/fetchallnotes"
      const response = await fetch(url, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
          
        },

      });
      const json=await response.json();
      

      setNotes(json)
      

    }


    const addnote = async (title,description,tag)=>{
      const url ="http://localhost:5000/api/notes/addnotes"
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
          
        },
        
        body:JSON.stringify({title,description,tag})
      });
      const note = await response.json();
      setNotes(notes.concat(note))
        
      

        

    }

    const deletenote =async (id)=>{
      const url =`http://localhost:5000/api/notes/deletenote/${id}`
      const response = await fetch(url, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
          
        },
        
        
      });
     
        
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);

        
    }

    const updatenote = async (title,description,tag,id)=>{
      const url =`http://localhost:5000/api/notes/updatenotes/${id}`
      const response = await fetch(url, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
          
        },
        
        body:JSON.stringify({title,description,tag})
      });
      const newNotes =  JSON.parse(JSON.stringify(notes));

      for (let i=0;i<newNotes.length;i++){
        if(newNotes[i]._id===id){
          newNotes[i].title=title
          newNotes[i].description=description
          newNotes[i].tag=tag
          break;

        }
      }
      setNotes(newNotes);
      
        
    }
    return (
        <NoteContext.Provider value={{notes,setNotes,addnote,deletenote,fetchnotes,updatenote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;