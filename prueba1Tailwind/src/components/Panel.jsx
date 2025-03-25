import { Link } from 'react-router-dom';

function Panel() {
  return (
    <div>
      <h1>Página principal</h1>
      <Link to="/task">
        <button>Ir a Task</button>
      </Link>
    </div>
  );
}

export default Panel;