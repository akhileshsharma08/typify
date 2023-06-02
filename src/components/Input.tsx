import React from 'react'
import '../App.css'
import Todo from './Todo'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string
    >>
}


const Input = ({todo,setTodo}:Props) => {
    const HandleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(todo)
        }
  return (
    <div>
        <form className='input' >
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter Your Task' className='myinput'/>
        <button onClick={HandleSubmit} className=' mybtn' >Go</button>
    
        </form>
        <Todo />
    </div>
  )
}

export default Input