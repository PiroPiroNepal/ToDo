import React, {useState} from 'react'


const ToDoForm = ({addTodo}) => {
    const[value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
       
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="enter your todo" value={value} onChange= { (e) => setValue(e.target.value)}></input>
        <button type="submit" className="todo-btn"> Submit </button>
      </form>
    </div>
  )
}

export default ToDoForm
