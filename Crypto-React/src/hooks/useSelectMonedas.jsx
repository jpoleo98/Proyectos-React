import {useState} from 'react' 
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
    font-weight: 700;
    display: block;
    font-size: 24px;
    font-family: 'Lato',sans-serif;
    margin: 15px 0;

`

const Select = styled.select`
  padding: 10px;
  display: block;
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
  font-size: 18px;
  font-weight: 400;

`

const useSelectMonedas = (label,opciones) => {

  const [state,setState] = useState('')

  const SelectMonedas = ()=>(
    <>
        <Label htmlFor="monedas">{label}</Label>
        <Select 
          name="monedas" 
          id="monedas"
          value={state}
          onChange={e=>setState(e.target.value)}
        >
            <option value="">Seleccione</option>
            {opciones.map(opcion=>(
                <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
            ))}
        </Select>
    </>
  )

  return [state,SelectMonedas];
}

export default useSelectMonedas