import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {


  return (
    <div className='itemDetail'>
        <img className='imgDetail' src={item.file} alt="" />
        <div className='detailBody'>
            <h2>{item.title}</h2>
            <p className='detailInfo'>{item.info}</p>
            <h3>{item.price}</h3>
            <ItemCount/>
        </div>
        
    </div>
  )
}


export default ItemDetail





