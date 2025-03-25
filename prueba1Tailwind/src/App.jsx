import './App.css'
import { Routes, Route } from 'react-router-dom';
import Panel from './components/Panel'
import Task from './components/Task'



function App() {
  

  return (
    <>
      <h2 className='text-3xl font-bold underline bg-amber-200 text-center mt-9'>Prueba Tailwind+Localstorage</h2>
      <Routes>
        <Route path='/' element={<Panel />} />
        <Route path='/Task' element={<Task />} />
      </Routes>
      
    </>
  )
}

export default App
