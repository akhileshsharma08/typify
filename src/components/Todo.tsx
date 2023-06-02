import React from 'react'
import {BsFillTrash3Fill} from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'

const Todo = () => {
  return (
    <div>
        <div className="mainbtnbox bg">
            <ul className="btnsbox d-flex justify-content-end align-items-center list-unstyled">
                <li className='mx-1 '><AiFillEdit/></li>
                <li className='mx-1 '><BsFillTrash3Fill/></li>
                <li className='mx-1 '><AiOutlineCheck/></li>
            </ul>
        </div>
    </div>

  )
}

export default Todo