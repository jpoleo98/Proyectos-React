import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const ImputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    color: #FFF;
    font-weight: 700;
    font-size:20px;
    text-transform: uppercase;
    transition: background-color .3s ease-in;

    &:hover{
        cursor: pointer;
        background-color: #7a7dfe;
    }
`

const Formulario = ({setMonedas}) => {

  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)
  const [moneda, SelectMoneda] = useSelectMonedas('Elige Tu Moneda', monedas);
  const [cryptomoneda, SelectCrypto] = useSelectMonedas('Elige Tu Cryptomoneda', cryptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCrypto = resultado.Data.map(crypto => {

        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        }

        return objeto;

      })

      setCryptos(arrayCrypto);
    }

    consultarAPI();
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([moneda, cryptomoneda].includes('')) {
      setError(true);
      setTimeout(()=>{
        setError(false);
      },3000)
    }

    setError(false);
    setMonedas({moneda,cryptomoneda});
  }

  return (

    <>
      {error && <Error>Todos los campos son requeridos</Error>}

      <form onSubmit={handleSubmit}>

        <SelectMoneda />
        <SelectCrypto />

        <ImputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}

export default Formulario