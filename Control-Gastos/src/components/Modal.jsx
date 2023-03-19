import {useState,useEffect} from 'react'
import cerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje' 

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastosEditar}) => {

    const cerrar =()=>{
        
        setAnimarModal(false)
        setGastosEditar({})

        setTimeout(()=>{
            setModal(false)
        },500)
    }

    const [nombre,setNombre] = useState('');
    const [cantidad,setCantidad] = useState(0);
    const [categoria,setCategoria] = useState('');
    const [fecha,setFecha] = useState('');
    const [mensaje,setMensaje] = useState('');
    const [id,setId] = useState('');

    useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        setNombre(gastoEditar.nombre);
        setCantidad(gastoEditar.cantidad);
        setCategoria(gastoEditar.categoria);
        setId(gastoEditar.id);
        setFecha(gastoEditar.fecha);
      }
    }, [])
    

    const handleSubmit = ((e)=>{
        e.preventDefault();

        //Validación

        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios...')
            setTimeout(()=>{
                setMensaje('');
            },2000)
        
            return;
        }

        guardarGasto({nombre,cantidad,categoria,id,fecha});
    })

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img src={cerrarModal} alt="Cerrar Ventana Modal" 
                onClick={cerrar}/>
        </div>

        {}

        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`} onSubmit={handleSubmit}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" name="nombre" id="nombre" placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={(e)=>{
                            setNombre(e.target.value);
                        }}
                        />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" name="cantidad" id="cantidad" placeholder='Añade la cantidad del gasto: ej.300'
                        value={cantidad}
                        onChange={(e)=>{
                            setCantidad(Number(e.target.value));
                        }}/>
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" id="categoria" value={categoria} onChange={(e)=>{
                            setCategoria(e.target.value);
                        }}>
                    <option value="">-- Seleccione --</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                </select>
            </div>

            <input type="submit" value={`${gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}`}/>

        </form>
    </div>
  )
}

export default Modal