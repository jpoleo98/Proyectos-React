import Paciente from "./Paciente"

function ListadoPacientes({ pacientes,setPaciente,eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll mx-5">

      {pacientes && pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="font-bold text-lg mt-8 text-center">
            Administra tus {''}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )
          )}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="font-bold text-lg mt-8 text-center">
            Comienza Agregando Pacientes{''}
            <span className="text-indigo-600"> y Apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes