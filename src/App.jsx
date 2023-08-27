import { useState } from 'react'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Banner />
        <Formulario />
    </>
  );
}

export default App
