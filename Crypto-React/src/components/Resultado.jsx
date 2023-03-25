import { useState } from "react"
import styled from "@emotion/styled"

const Resultados = styled.div`
    color: #ffffff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

`

const Texto = styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Precio = styled.p`
    font-size: 20px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    return (
        <Resultados>
            <Imagen src={`https://cryptocompare.com/${resultado.IMAGEURL}`} alt="Imagen cryptomoneda" />
            <div>
                <Precio>El precio es de: <span>{resultado.PRICE}</span></Precio>
                <Texto>El precio más alto del dia: <span>{resultado.HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del dia:<span>{resultado.LOWDAY}</span></Texto>
                <Texto>Variación de precio ultimas 24 Horas:<span>{resultado.CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima Actualización: :<span>{resultado.LASTUPDATE}</span></Texto>
            </div>
        </Resultados>
    )
}

export default Resultado