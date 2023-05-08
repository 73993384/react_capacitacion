import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Proyecto Creado por Pablo Suyo Alpelina</p>
        <PrimerComponente />
        <br></br>
        <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
