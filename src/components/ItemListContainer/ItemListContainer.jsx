import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'>
        <h1 className='greeting'>{greeting}</h1>
    </div>
  )
}
