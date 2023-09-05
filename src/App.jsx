import { useState } from 'react'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const[colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    //TÔ ESPALHANDO OS COLABORADORES ANTIGOS, E COLOCANDO O NOVO COLABORADOR
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </>
  );
}

export default App
