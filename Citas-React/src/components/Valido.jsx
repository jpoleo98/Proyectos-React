import React from 'react'

const Valido = ({mensaje}) => {
  return (
    <div className='w-full bg-green-800 rounded-lg p-2 my-2'>
        <p className='font-bold text-white text-center transition-all uppercase'>{mensaje}</p>
    </div>
  )
}

export default Valido