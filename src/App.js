import './assets/App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="app-container">
      <div className='container px-4'>
          <Todos/>
      </div>
    </div>
  );
}

export default App;
