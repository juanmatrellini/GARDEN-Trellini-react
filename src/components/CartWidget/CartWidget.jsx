import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'
// import { useCartContext } from '../context/CartContextProvider'
import { NavLink } from 'react-router-dom'

const CartWidget = ({itemQ}) => {
  // const {totalCount} = useCartContext();
  return (
    <NavLink to='/cart'>
    <FaShoppingCart className='cart'/>
    <span>{itemQ}</span>
  </NavLink>
    
  )
}

export default CartWidget