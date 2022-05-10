import React from 'react'
import './ButtonDefault.css'

const ButtonDefault = ({title}) => {
  return (
    <div className='buttonDiv'>
      <button className='buttonDefault'><span>{title}</span></button>
    </div>
  )
}

export default ButtonDefault