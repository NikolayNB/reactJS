import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}
      <MiOrg />
    </div>
  );
}

export default App;
