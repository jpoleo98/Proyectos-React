import {useState,useEffect} from 'react';
import Error from './Error';
import Valido from './Valido';

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error,setError] = useState(false);
  const [valido,setValido] = useState(false);

  useEffect(()=>{
    if(Object.keys(pacientes).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  },[paciente])

  const generarId = ()=>{
    let fecha = Date.now().toString(36);
    let ramdom = Math.random().toString(36).substr(2);

    return fecha+ramdom;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validar Formulario

    if([nombre,propietario,email,alta,sintomas].includes('')){

      setError(true);
      setTimeout(()=>{
        setError(false);
      },5000)

      return;
    }
    
    setError(false);

    //Objeto Paciente

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id){
      //Editando

      objetoPaciente.id = paciente.id;

      const pacientesUpdate = pacientes.map(pacienteState =>{
        if(pacienteState.id === paciente.id){

          return objetoPaciente;  
        }else{
          return pacienteState;
        }
      })

      setPacientes(pacientesUpdate)
      setPaciente({});

    }
    else{
      //Nuevo Registro
      objetoPaciente.id =generarId();
      setPacientes([...pacientes,objetoPaciente]);
    }

    //Reiniciar Formulario

    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

    setValido(true);
    setTimeout(()=>{
      setValido(false);
    },5000)
    

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="font-bold text-lg mt-8 text-center">
          Añade Paciente y {''}
          <span className="text-indigo-600">Adminitralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white m-5 p-5 shadow-md rounded-lg">

            {error && <Error mensaje='Todos los campos son obligatorios'/>}

            {valido && <Valido mensaje='Agregado Correctamente'/>}

            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
              <input type="text" name="Mascota" id="mascota" placeholder="Nombre Macota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
              <input type="text" name="Propietario" id="propietario" placeholder="Nombre Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     value={propietario}
                     onChange={(e) => setPropietario(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
              <input type="email" name="Email" id="email" placeholder="tucorreo@email.com" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
              <input type="date" name="Alta" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Alta</label>
              <textarea name="Sintomas" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
                        placeholder="Describe Los Sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                        />
            </div>

            <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} 
                   className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-500 cursor-pointer transition-all delay-200"/>

        </form>
    </div>
  )
}

export default Formulario;