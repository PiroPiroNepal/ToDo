import React, {useState} from 'react'


const EditToDoForm = ({editTodo, task}) => {
    const[value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
       
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Update Task!" value={value} onChange= { (e) => setValue(e.target.value)}></input>
        <button type="submit" className="todo-btn"> Save </button>
      </form>
    </div>
  )
}

export default EditToDoForm
