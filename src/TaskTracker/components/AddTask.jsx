import React, {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        //send user input back to app component
        onAdd({title, desc, reminder});
        
        //reset state
        setTitle('');
        setDesc('');
        setReminder(false);
    }
  return (

    <form
    className="add-form"
    onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="todo">What to do</label>
            <input 
            type="text"
            placeholder = "add your task here"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
            />
        </div>
        <div className="form-control">
            <label htmlFor="desc">Short text of what to do</label>
            <input 
            type="text"
            placeholder="write a short text about the task" 
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="checkbox">Would you like to set a reminder?</label>
            <input 
            type="checkbox"
            value={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)}
             />
        </div>
        <input 
        type="submit"
        value ='Save To Do'
        className="btn btn-block"
        />
    </form>
  )
}

export default AddTask;