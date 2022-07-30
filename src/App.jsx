/**
 * implement react router dom (React js)
 * 
 * give reward for completed task (feature)
 * 
 * add complete check mark (feature)
 * 
 * add section to show completed task 
 * (with score) (feature)
 * 
 * Use css grid where possible (CSS)
 * 
 * implement useRef hook where possible (React js)
 * 
 * implement show or no show project 
 * when no show project show project description (how to use project, tutorial or not 
 * if tutorial what did you add, inspiration, modules you used)
 */



import React, {useEffect, useState} from 'react'
import TaskTracker from './TaskTracker/TaskTracker';

import './index.css'


const App1 = () => {
                    //  S T A T E S
  const [todos, setTodos] = useState([ ]);
  const [showForm, setShowForm] = useState(false);

                //  F E T C H
  //1. fetch data from mock backend (db.json) and return it
  const fetchTodos = async ()=>{
    const res = await fetch('http://localhost:5000/todos');
    const data = await res.json(); 
    return data;
  }

  const fetchTodo = async (id)=>{
    const res = await fetch(`http://localhost:5000/todos/${id}`);
    const data = await res.json(); 
    return data;
  }

  //2. use useEffect to update state with data from server 
  useEffect(()=>{
    const getData = async () =>{
      const todosFromServer = await fetchTodos();
      setTodos(todosFromServer);
    } 
    getData();
  }, [])

              
            //  F U N C T I I O N S  
    const onBtnClick = (e) => {
      setShowForm(!showForm);
    }

  const toggleReminder = async (id) => {
    const singleTodo = await fetchTodo(id);
    const updTodo = {...singleTodo, 
      completed: !singleTodo.completed};

      //UPDATE
  const res = await fetch(
  `http://localhost:5000/todos/${id}`, 
  {
      method : 'PUT',
      headers : {
      'Content-type': 'application/json'
      },
      body : JSON.stringify(updTodo),
  });

  const data = await res.json();

  setTodos(
  todos.map((todo)=> todo.id === id ? {...todo, completed: data.completed} : todo)
  );
  }

  //ADD
  const onAdd = async (userTodo) =>{
  const res = await fetch(
      `http://localhost:5000/todos/`, 
      {
      method : 'POST',
      headers : {
          'Content-type': 'application/json'
      },
      body : JSON.stringify(userTodo)
      }
  );
  const data = await res.json();
  setTodos([...todos, data]);

  /* //without mock backend 
  const id = todos.length + 1;
  const newTodo ={id, ...userTodo};
  setTodos([...todos, newTodo], )
  */
  }

    //DELETE
    const onDelete = async (id) => {
    //fetch by id and specify method 
    await fetch(
        `http://localhost:5000/todos/${id}`, 
        {method : 'DELETE',}
    )
    setTodos(todos.filter((todo)=>(todo.id !== id)));

    }
  return (
    <div className='container'>

    
        <TaskTracker 
        todos ={todos}
        showForm = {showForm}
        onAdd={onAdd}
        onBtnClick={onBtnClick}
        onDelete={onDelete}
        toggleReminder = {toggleReminder}
        />

    </div>
  )
}

export default App1