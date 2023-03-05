const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const handleEliminar = () =>{
    const respuesta = confirm('Desea Eliminar este Paciente: ',paciente.nombre);

    if(respuesta === true){
      eliminarPaciente(paciente.id);
    }

  }

  return (
    <div className="bg-white m-5 p-5 shadow-md rounded-lg">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: 
          <span className="font-normal normal-case"> {paciente.nombre}</span></p>
        

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: 
          <span className="font-normal normal-case"> {paciente.propietario}</span></p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: 
          <span className="font-normal normal-case"> {paciente.email}</span></p>
          
          <p className="font-bold mb-3 text-gray-700 uppercase">Alta: 
          <span className="font-normal normal-case"> {paciente.alta}</span></p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: 
          <span className="font-normal normal-case"> {paciente.sintomas}</span></p>

          <div className="flex justify-between">
            <button type="button" className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-1 px-10 text-white uppercase font-bold"
                    onClick={()=>setPaciente(paciente)}>Editar</button>
            <button type="button" className="bg-red-700 rounded-md py-1 px-10 text-white uppercase font-bold"
                    onClick={handleEliminar}   
                    >Eliminar</button>
          </div>

    </div>
  )
}

export default Paciente