import React,{useState} from 'react'
import EditContext from './EditContext'

const EditState = (props) => {
    const [show,setShow]=useState({bool:false,id:""})
    

  return (
    <EditContext.Provider value={{show,setShow}}>
            {props.children}
        </EditContext.Provider>
    
  )
}

export default EditState
