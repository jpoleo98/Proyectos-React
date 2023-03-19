import React from 'react'
import Gasto from './Gasto'

const ListadosGastos = ({ gastos, setGastosEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className='listado-gastos contenedor'>

      {
        filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoria'}</h2>
            {gastosFiltrados.map(gasto => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastosEditar={setGastosEditar}
                eliminarGasto={eliminarGasto}
              />

            ))}
          </>) : (
          <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
          {gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
            ))}
          </>
        )
      }

    </div>
  )
}

export default ListadosGastos