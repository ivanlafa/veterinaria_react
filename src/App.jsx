import {useState,useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listadopacientes from "./components/Listadopacientes"


function App() {

  const [pacientes,setPacientes] = useState ([]);
  const [paciente,setPaciente] = useState({});
  
  //se carga una sola vez cuando el componente esta listo
  useEffect(()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);

  //este sincroniza con lo que hay en el state 
  useEffect(()=>{
    //console.log('componente listo o cambio paciente ')
    localStorage.setItem('pacientes', JSON.stringify( pacientes ) );
  },[pacientes]);

  const eliminarPaciente = id =>{
     const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
     //console.log(pacientesActualizados)
     setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto">
        <Header />
        <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}    
        />
        <Listadopacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
        </div>
    </div>
  )
}

export default App
