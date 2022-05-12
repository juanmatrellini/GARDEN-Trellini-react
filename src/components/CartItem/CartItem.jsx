import React from 'react'
import "./CartItem.css"
import ButtonDefault from '../ButtonDefault/ButtonDefault'

import { useCartContext } from '../context/CartContextProvider'

const CartItem = ({item}) => {
    const {deleteItem, removeOneUnit, addOneUnit} = useCartContext();


  return (
    <div className='cartItem'>
        <img src={item.file} alt="" />
        <h1>{item.title}</h1>
        <h4>Cantidad: {item.quantity}</h4>
        <h3>Precio unitario: ${item.price}</h3>
        <button className='btnPlus' onClick={() => addOneUnit(item.id)}>+</button>
        <button className='btnMiss' onClick={() => removeOneUnit(item.id)}>-</button>
        <button className='btnMiss' onClick={() => deleteItem(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem