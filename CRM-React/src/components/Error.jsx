import React from 'react'

const Error = ({children}) => {

  return (
    <div className='bg-red-600 text-center my-4 text-white uppercase font-bold p-3'>
        {children}
    </div>
  )
}

export default Error