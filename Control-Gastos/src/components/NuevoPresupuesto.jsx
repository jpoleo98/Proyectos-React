import { useState,useEffect } from "react"; 
import Mensaje from "./Mensaje";

export const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValidPrespuesto}) => {

    const [mensaje,setMensaje] = useState('');

    const handlePresupuesto = (e) =>{
        e.preventDefault();

        //Validar Presupuesto
        
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('Presupuesto No es Valido');

            return 
        }

        setMensaje('');
        setIsValidPrespuesto(true);
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className="campo">
                <label htmlFor="presupuesto">Definir Presupuesto</label>
                <input type="number" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu Presupuesto'
                    min='0'
                    id='presupuesto'
                    value={presupuesto}
                    onChange={(e)=>{
                        setPresupuesto(Number(e.target.value))
                    }}
                />

                <input type="submit" value="Añadir"/>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </div>
        </form>
    </div>
  )
}
