import React, {useState} from 'react'

import ToDo from './ToDo'
import ToDoForm from './ToDoForm'


import { v4 as uuidv4 } from 'uuid';
import EditToDoForm from './EditToDoForm';
uuidv4();

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo,  completed: false, isEditing: false  }])
        console.log(todos)
    }
    const toggleComplete = id => { 
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
    }
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo ))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task,  isEditing : !todo.isEditing} : todo ))
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <div class="TodoWrapper">
        <h1>Get Things Done!</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? ( 
            <EditToDoForm editTodo={editTask} task={todo}/>
        ) : (
          <ToDo task={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo}/>
        )
      )

         )
        }
        
    </div>
  )
}

export default ToDoWrapper
