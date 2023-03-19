import {useState} from 'react'

const Filtros = ({filtro,setFiltro}) => {

  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className="campo">
                <label htmlFor="filtro">Filtrar Gastos</label>
                <select name="filtro" id="filtro" value={filtro} onChange={(e)=>{
                    setFiltro(e.target.value)
                }}>
                    <option value="">-- Todos los gastos --</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros