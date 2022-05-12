import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartContextProvider'

const ItemDetail = ({item}) => {
  const [bought, setBought] = useState(false)
  const {addItem, unitsPerProduct} = useCartContext();


const onAdd = (count) => {
  if (count + unitsPerProduct(item.id) > item.stock) {
    const availableToAdd = item.stock - unitsPerProduct(item.id)
    return alert(`Solo puede agregar ${availableToAdd} productos`)
  }
  setBought(true)
  addItem(item, count)

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





