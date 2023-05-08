
import { useState, useEffect } from 'react'
import Error from './Error'


const Formulario = ({pacientes,setPacientes,paciente}) => {

  //useState
const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');

const [error,setError]= useState(false)

//console.log(paciente)

useEffect(()=>{
  if(Object.keys(paciente).length>0){
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  }
}, [paciente])

const generarId = () => {
  const randomString = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36)

  return randomString + fecha
}

const handleSubmit = (e) =>{
  e.preventDefault();
//validando formulario
if ([nombre,propietario,email,fecha,sintomas].includes('')){
  
console.log('Hay almenos un campo vacio')
setError(true)
return;
}
setError(false)

//objeto de paciente
const objetoPaciente={
  nombre,
  propietario,
  email,
  fecha,
  sintomas,
  id: generarId()
}
//console.log(objetoPaciente)
setPacientes([...pacientes, objetoPaciente]);

//reiniciar el form
setNombre('')
setPropietario('')
setEmail('')
setFecha('')
setSintomas('')
}

  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3x text-center">Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p> 

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error><p>todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota </label>
          <input 
          id="mascota"
          type="text"  
          placeholder="Nombre de la mascota" 
          className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={ (e)=> setNombre(e.target.value) }
          />
          </div>

          <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input 
          id="propietario"
          type="text"  
          placeholder="Nombre del Propietario" 
          className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={ (e)=> setPropietario(e.target.value) }
          />
          </div>

          <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
          id="email"
          type="email"  
          placeholder="email" 
          className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={ (e)=> setEmail(e.target.value) }
          />
          </div>

          <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">Date</label>
          <input 
          id="Alta"
          type="date"  
          placeholder="date" 
          className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={ (e)=> setFecha(e.target.value) }
          />
          </div>

          <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
          id="sintomas"  
          placeholder="describe los sintomas" 
          className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
          value={sintomas}
          onChange={ (e)=> setSintomas(e.target.value) }
          />
          </div>

          <input 
          type="submit"
          className="bg-indigo-600 w-full text-white font-bold border-2
           hover:bg-indigo-700
            cursor-pointer transition-opacity" 
          value={paciente.id ? 'editar paciente' : 'agregar paciente'}
          />



      </form>
    </div>
    


  )
}

export default Formulario

