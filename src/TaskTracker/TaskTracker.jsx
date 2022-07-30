import React from 'react';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

const TaskTracker = ({onAdd, showForm, onBtnClick, todos, onDelete, toggleReminder}) => {
  return (
    <div className='project'>
         <Header title = "Task Tracker Project" onBtnClick = {onBtnClick} showForm = {showForm}/>
                { showForm  && <AddTask onAdd={onAdd}/>  }
                { todos.length === 0 ? 'Congratulations you have nothing to do' : <Tasks todos = {todos} onDelete = {onDelete} onToggleReminder = {toggleReminder}/>}
        <Footer />
    </div>
  )
}

export default TaskTracker