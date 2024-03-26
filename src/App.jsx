import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Redux Todo List web</h1>
      <AddTodos/>
      <Todos/>
    </div>
  )
}

export default App
