import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'


class CartWidget extends React.Component {
    render() {
      return <FaShoppingCart className='cart'/>
    }
  }

export default CartWidget