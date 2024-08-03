import React from 'react';
import iconEdit from './IconEdit.svg'; // Import as default
import iconDelete from './IconDelete.svg'

const ToDo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
    return (
        <div className="todo" >
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : '' }`}>{task.task}</p> <div className='icon-container'>
            <img src={iconEdit} className="icon-edit"alt="icon" onClick={() => editTodo(task.id)}     />
            <img src={iconDelete} className='icon-delete' alt='icon' onClick={() => deleteTodo(task.id)}/>
            </div>

        </div>
    );
}

export default ToDo;
