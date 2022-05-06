import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({ file, title, price, stock, id }) => {


  return (
    <>
     <Link to={'/item/' + id}><div className='itemContainer'>
        <img className='itemImg' src={file} alt="" />
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div></Link>
    </>
  )
}

export default Item




  
