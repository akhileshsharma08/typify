import React, { useState } from "react";
import { Todo } from "../model";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const SingleTask: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const HandleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  const HandleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <div 

      
        className={
          todo.isDone
            ? "bg-danger mainbtnbox  bg px-2 col-md-10"
            : "bg-white mainbtnbox bg px-2 col-md-10 "
        }
      >

        <div className="singletodo  d-flex justify-content-between align-items-center ">
        {edit ? (
          <form onSubmit={(e) => handleEdit(e, todo.id)}>
            {" "}
            <input type="text" value={editTodo}  onChange={(e) => setEditTodo(e.target.value)}/>
          </form>
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
          <ul className="btnsbox d-flex justify-content-end align-items-center list-unstyled">
            <li
              className="mx-2  "
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </li>
            <li onClick={() => HandleDelete(todo.id)} className="mx-2  ">
              <BsFillTrash3Fill />
            </li>
            <li className="mx-2  " onClick={() => HandleDone(todo.id)}>
              <AiOutlineCheck />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
