import React,{useState} from 'react'
import Input from './Input'


const Home:React.FC = () => {
    
    const [todo,setTodo] = useState<string>("");



  return (
    <div>
        <div className="container">
            <h1 className='text-white text-center my-4'>Typify :Todo App </h1>
        <Input todo={todo} setTodo={setTodo}/> 
        </div>
       
    </div>
  )
}

export default Home