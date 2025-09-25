import './App.css';
import { Menu } from './componentes/menu/Menu';
import { Medio } from './componentes/medio/Medio';
import { Abajo } from './componentes/abajo/Abajo';

function App() {
  return (
    <div className="App container">
      <Menu />
      <Medio texto1="Medio1" texto2="Soy el medio 2" />
      <Abajo />
    </div>
  );
}

export default App;
