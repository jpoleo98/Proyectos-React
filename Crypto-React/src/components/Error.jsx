import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFFFFF;
    padding: 15px;
    font-size: 22px;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border-radius: 10px;

`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error