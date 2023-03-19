import { useState,useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Control = ({presupuesto,gastos,setGastos,setPresupuesto,setIsValidPrespuesto}) => {
  
  const [disponible,setDisponible] = useState(0);
  const [gastado,setGastado] = useState(0);
  const [porcentaje,setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidad+ total,0)
    setGastado(totalGastado)

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);

    //Calcular Porcentaje

    const totalPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    setTimeout(()=>{
      setPorcentaje(totalPorcentaje);
    },1000)

  }, [gastos])

  
  
  //Formatear cantidad a Dinero
  const formatearCantidad = (cantidad) =>{
    return cantidad.toLocaleString('en-US',{
      style:'currency',
      currency:'USD'
    })
  }

  //Resetar App

  const handleResetApp = ()=>{
    const resultado = confirm('¿Desea Eliminar los Gastos?');

    if(resultado){
      setPresupuesto(0);
      setGastos([]);
      setIsValidPrespuesto(false);
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: porcentaje > 100 ? 'red' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: '#3B82F6'
              })}
              value={porcentaje}
              text={`${porcentaje}% Gastado`}
            />
        </div>

        <div className='contenido-presupuesto'>

            <button className='reset-app' type='button' onClick={handleResetApp}>Resetear App</button>
              
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>

        </div>
    </div>
  )
}

export default Control