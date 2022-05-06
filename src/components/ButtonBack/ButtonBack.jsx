import React from 'react'
import { NavLink } from 'react-router-dom'
import './ButtonBack.css'

const ButtonBack = () => {
  return (
    <div className='buttonDiv'>
      <NavLink to='/'><button className='buttonBack'><span>Volver</span></button></NavLink>
    </div>
  )
}

export default ButtonBack