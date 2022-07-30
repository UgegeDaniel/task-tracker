import React from 'react';
import Task from './Task'

const Tasks = ({todos, onDelete, onToggleReminder}) => {


  return (
    <div>
        {todos.map((todo, index) =>(
            <Task key={index} todo={todo} onDelete ={onDelete}
            onToggleReminder = {onToggleReminder}/>
        ))}
    </div>
  )
}

export default Tasks