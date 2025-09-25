import React, { useState } from 'react'
import './Medio.css'

export const Medio = ({texto1, texto2}) => {
 const [nom, setNom] = useState("Ana Rojas")
 const [cont, setCont] = useState(0)

  const hola = () => {
    let nombre = document.getElementById("txtNombre").value
    let apellido = document.getElementById("txtApellido").value
    alert("Hola " + nombre + " " + apellido)
  }
  
  const cambiarNombre = () => {
    let nom2 = document.getElementById("txtNom").value
    setNom(nom2)
    console.log(nom)
  }

  const aumentar = () => {
    setCont(cont + 1)
  }

  return (
    <div className='linda'>
        <h1>Nombre: {nom}</h1>
        <input type="text" placeholder='Escribe nombre' id='txtNom'/><br /><br />  
        <h1 onClick={aumentar}>Contador {cont}</h1>
        <button className='btn btn-primary' onClick={cambiarNombre}>Cambiar nombre inicial</button><br /><br />
        <input type="text" placeholder='Escribe nombre' id='txtNombre'/>  
        <input type="text" placeholder='Escribe apellido' id='txtApellido' />
        <button className='btn btn-primary' onClick={hola}>Dame click</button>
        <hr />
    </div>
  )
}
