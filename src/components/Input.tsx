import React from "react";
import "../App.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const Input:React.FC<props> = ({ todo, setTodo,handleAdd }) => {
 
  return (
    <div>
      <form onSubmit={(e)=>{handleAdd(e)}} className="input">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Your Task"
          className="myinput"
        />
        <button  className=" mybtn">
          Go
        </button>
      </form>
    </div>
  );
};

export default Input;
