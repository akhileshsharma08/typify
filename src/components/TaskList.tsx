import React from 'react'
import {Todo} from '../model'
import SingleTask from './SingleTask';

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList :React.FC<props> = ({todos,setTodos}) => {
    return (
        <div className="todos d-flex container ">
            <div className="row d-flex justify-content-start align-items-center  ">
                
           
          {todos?.map((todo) => (
            <SingleTask
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
        </div>
        </div>
      );
}

export default TaskList