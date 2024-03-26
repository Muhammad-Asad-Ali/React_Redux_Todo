import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feathers/todoSlice'

const Todos = () => {
  const todos = useSelector(state=>state.todos)
  const dispatch =useDispatch()
  return (
    <div className='flex justify-center mt-4 min-w-[80%]'>
    
    <ul className='list-none min-w-[71.5%]'>
    {todos.map((todo)=>(
        <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
            <div className='text-white'>{todo.text}</div>
            <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md' onClick={()=> dispatch(removeTodo(todo.id))}>
                X
            </button>
        </li> 
    ))}
    </ul>
    </div>

  )
}

export default Todos