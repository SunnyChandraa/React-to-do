import './Todo.css';
import {useState} from 'react';
import TodoList from "../todo-list/TodoList"
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
    const [getTodos, setTodos] = useState([
        // {id: 1, title : 'sunny'},
        // {id: 2, title : 'chandra'},
        // {id: 3, title : 'ganteng banget'},
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div> 
            <h2>todo list</h2>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo
