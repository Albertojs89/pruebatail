import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Task() {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  // 📥 Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setListaTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // 💾 Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(listaTareas));
  }, [listaTareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setListaTareas([...listaTareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Tareas para realizar</h1>

      <input
        type="text"
        className="w-72 h-12 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 bg-white text-gray-700"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Introduce nueva tarea"
      />

      <button
        onClick={agregarTarea}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-all mb-4"
      >
        Agregar Tarea
      </button>

      <ul className="w-72 bg-white rounded shadow-md p-4">
        {listaTareas.map((tarea, index) => (
          <li key={index} className="text-gray-700 border-b last:border-none py-2">
            {tarea}
          </li>
        ))}
      </ul>

      <Link to="/">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all mt-4">
          Ir a Panel
        </button>
      </Link>
    </div>
  );
}

export default Task;
