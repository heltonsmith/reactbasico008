import logo from './logo.svg';
import './App.css';
import { Menu } from './componentes/menu/Menu';
import { Medio } from './componentes/medio/Medio';
import { Abajo } from './componentes/abajo/Abajo';

function App() {
  return (
    <div className="App">
      <Menu />
      <Medio texto1="Medio1" texto2="Soy el medio 2" />
      <Medio texto1="Perro" texto2="Dog" />
      <Medio texto1="Piscina" texto2="Azul" />
      <Medio texto1="Manzana" texto2="Casa" />
      <Medio texto1="Casa" texto2="Suelo" />
      <Abajo />
    </div>
  );
}

export default App;
