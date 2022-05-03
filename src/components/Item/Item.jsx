import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"

const Item = ({ file, title, price, stock }) => {


  return (
    <>
      <div className='itemContainer'>
        <img className='itemImg' src={file} alt="" />
        <h2>{title}</h2>
        <h3>${price}</h3>
        <ItemCount initial={1} stock={stock} />
        <button>+ info</button>
      </div>
    </>
  )
}

export default Item




  
