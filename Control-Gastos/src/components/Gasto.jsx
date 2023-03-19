import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import ImgAhorro from '../img/icono_ahorro.svg';
import ImgCasa from '../img/icono_casa.svg';
import ImgComida from '../img/icono_comida.svg';
import ImgGastos from '../img/icono_gastos.svg';
import ImgSalud from '../img/icono_salud.svg';
import ImgSuscripcion from '../img/icono_suscripciones.svg';

const diccionarioImg = {
  Ahorro: ImgAhorro,
  Comida: ImgComida,
  Casa: ImgCasa,
  Gastos: ImgGastos,
  Salud: ImgSalud,
  Suscripciones: ImgSuscripcion
}

const Gasto = ({ gasto, setGastosEditar , eliminarGasto}) => {

  const leadingActions = ()=>(
    <LeadingActions>
      <SwipeAction onClick={()=>{
        setGastosEditar(gasto);
      }}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = ()=>(
    <TrailingActions>
      <SwipeAction onClick={()=>eliminarGasto(gasto.id)}
                    destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className="contenido-gasto">
            <img src={diccionarioImg[gasto.categoria]} alt="Icono Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombre}</p>
              <p className="fecha-gasto">Agregado:
                <span>{gasto.fecha}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${gasto.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto