import React from 'react';

import {FaTimes} from 'react-icons/fa'

const Task = ({todo, onDelete, onToggleReminder}) => {

 const done = todo.completed ? "palegreen" : "tomato";

 const doneText = todo.completed ? "completed" : "yet to be completed";

 const deleteIconStyle ={
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  backgroundColor:done, 
  fontSize:"12px",
  width:"200px", 
  borderRadius:"5px", 
  margin:"10px 0", 
  padding:"3px"
 }

  return (
    <div 
    className={`task ${todo.completed ? "reminder" : ""}`}
    onDoubleClick = {() => onToggleReminder(todo.id)}
    >
        <h3>
            {todo.title}
        </h3>
        <h5>
          {todo.desc}
        </h5>
        <div style={deleteIconStyle}>
            {doneText}
        </div>
        <FaTimes 
          style={{color:"red", cursor:"pointer"}} 
          onClick={ () => onDelete(todo.id) }
          />
    </div>
  )
}

export default Task