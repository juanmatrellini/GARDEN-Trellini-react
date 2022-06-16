import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = ({itemQ}) => {
  return (
    <>
      <FaShoppingCart className='cart'/>
      <span>{itemQ}</span>
  </>
    
  )
}

export default CartWidget