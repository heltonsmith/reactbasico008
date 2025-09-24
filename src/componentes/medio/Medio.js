import React from 'react'
import './Medio.css'

export const Medio = ({texto1, texto2}) => {
  return (
    <div className='linda'>
        <h1>Hola soy el medio {texto1}</h1>
        <p>Texto del medio {texto2}</p>
        <hr />
    </div>
  )
}
