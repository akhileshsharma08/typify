import React,{useState} from 'react'
import Input from './Input'
import {Todo} from '../model'
import TaskList from './TaskList';


const Home:React.FC = () => {
    
    const [todo,setTodo] = useState<string>("");
    const [todos,setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (todo) {
        setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
        setTodo("");
      }
    };

  return (
    <div>
        <div className="container">
            <h1 className='text-white text-center my-4'>Typify : Todo App </h1>
        <Input todo={todo}  setTodo={setTodo} handleAdd={handleAdd}/> 
        
        <TaskList todos={todos} setTodos={setTodos}/>
        </div>
       
    </div>
  )
}

export default Home