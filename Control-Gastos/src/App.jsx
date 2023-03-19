import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import Filtros from './components/Filtros'
import Modal from './components/Modal'
import ListadosGastos from './components/ListadosGastos'
import { formatearFecha, generarId } from './helpers/index'
import ImagenAgregar from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPrespuesto, setIsValidPrespuesto] = useState(false);
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState( localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [gastoEditar, setGastosEditar] = useState({});
  const [filtro,setFiltro] = useState('');
  const [gastosFiltrados,setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto',presupuesto ?? 0); 
  },[presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if(presupuestoLS>0){
      setIsValidPrespuesto(true)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? []);
  }, [gastos])
  
  useEffect(()=>{
    if(filtro){
      //filtro gastos por categoria

       const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
       setGastosFiltrados(gastosFiltrados);
    }
  },[filtro])
  

  const handleNuevoGasto = () => {
    setModal(true);
    setGastosEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = (gasto) => {

    if(gasto.id){
      //actualizar
      const gastosAcualizados = gastos.map(gastoState => gasto.id === gastoState.id ? gasto: gastoState)
      setGastos(gastosAcualizados);
      console.log(gastosAcualizados);
      setGastosEditar({})
    }else{
      gasto.id = generarId();
      gasto.fecha = formatearFecha(Date.now());
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)

  }

  const eliminarGasto = (id)=>{
    const gastosAcualizados = gastos.filter(gasto => gasto.id !== id);

    setGastos(gastosAcualizados);
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPrespuesto={isValidPrespuesto}
        setIsValidPrespuesto={setIsValidPrespuesto}
      />

      {isValidPrespuesto && (
        <>
          <main>

            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />

            <ListadosGastos
              gastos={gastos}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
              gastosFiltrados={gastosFiltrados}
              filtro={filtro}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={ImagenAgregar} alt="Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastosEditar={setGastosEditar}
        />
      }

    </div>
  )
}

export default App
