import React from 'react'
import {NuevoPresupuesto}  from './NuevoPresupuesto'
import Control  from './Control'

export const Header = ({presupuesto,setPresupuesto,isValidPrespuesto,setIsValidPrespuesto,gastos,setGastos}) => {
  return (
    <header>
        <h1>Planificador De Gastos</h1>

        {
          isValidPrespuesto ? (
            <Control
              presupuesto={presupuesto}
              gastos={gastos}
              setGastos={setGastos}
              setPresupuesto={setPresupuesto}
              setIsValidPrespuesto={setIsValidPrespuesto}
            />
          ):
          (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPrespuesto={setIsValidPrespuesto}
            />
          )
        }
    </header>
  )
}
