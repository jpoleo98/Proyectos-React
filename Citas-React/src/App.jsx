import {useState,useEffect} from 'react';

import Header from './components/Header.jsx';
import Formulario from './components/Formulario.jsx';
import ListadoPacientes from './components/ListadoPacientes.jsx';

function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect(()=>{
    const obtener = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtener();
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = id =>{
    const pacienteUpdate = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteUpdate);
  }

  return (
    <div className='container mx-auto mt-5'>
        <Header/>
        <div className='mt-12 md:flex'>
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes 
            pacientes = {pacientes}
            setPaciente ={setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        </div>
    </div>
  )
}

export default App
