import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import ButtonDefault from '../ButtonDefault/ButtonDefault'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartContextProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {
  const [bought, setBought] = useState(false)
  const {addItem, unitsPerProduct} = useCartContext();


  const notify = () => {
      toast('Añadido al carrito', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        className: "toastify-css",
  });
  }
  


const onAdd = (count) => {
  if (count + unitsPerProduct(item.id) > item.stock) {
    const availableToAdd = item.stock - unitsPerProduct(item.id)
    return alert(`Solo puede agregar ${availableToAdd} productos`)
  }
  notify()
  setBought(true)
  addItem(item, count)
  
  

}


  return (
    <>
      <div className='itemDetail'>
          <img className='imgDetail' src={item.file} alt="" />
          <div className='detailBody'>
              <h2>{item.title}</h2>
              <p className='detailInfo'>{item.info}</p>
              <h3>$ {item.price}</h3>
      
              
              <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
              <ToastContainer/>
          </div>      
      </div>
      {bought &&
        <div>
            <NavLink to='/cart'><ButtonDefault title="Finalizar compra"/></NavLink>
        </div>
      }
    </>
  )
}


export default ItemDetail





