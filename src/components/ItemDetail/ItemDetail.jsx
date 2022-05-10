import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({item}) => {
  const [bought, setBought] = useState(false)

const onAdd = (count) => {
  if (count == 1) {
    alert(`Agregaste ${count} producto al carrito.`)
  } else {
    alert(`Agregaste ${count} productos al carrito.`)
  }
  
  setBought(true)

}


  return (
    <div className='itemDetail'>
        <img className='imgDetail' src={item.file} alt="" />
        <div className='detailBody'>
            <h2>{item.title}</h2>
            <p className='detailInfo'>{item.info}</p>
            <h3>$ {item.price}</h3>
            <>
            {!bought && 
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            }

            {bought &&
            <div>
            <h4>Ha añadido su producto al carrito.</h4>
            <NavLink to='/cart'><ButtonDefault title="Finalizar compra"/></NavLink>
            </div>
            }
            
            </>
            
        </div>
        
    </div>
  )
}


export default ItemDetail





