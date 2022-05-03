import { React, useState, useEffect } from "react";
import "./ItemDetailContainer.css"
import ItemDetail from '../ItemDetail/ItemDetail'


function getItem () {
    const itemPromise = new Promise ((resolve, reject) => {
      const item = {
        id: 7,
        title: 'MINI CLASICA',
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iste suscipit, culpa nesciunt atque fugiat ipsum, fugit unde sequi quisquam quae magnam? Facere nisi esse quos repellendus modi laudantium laborum!",
        price: '$1400',
        stock: 47,
        file: "../Imag/minibox-01.jpg",
      };
      setTimeout(() => {
        resolve (item);
      }, 2000)
    })
    return itemPromise
}



function ItemDetailContainer() {

  const [item, setItem] = useState ({});

  useEffect (() => {
    getItem()
      .then(res => {
        setItem(res)
      })
  }, [])


  
  return (
      <div>
          <ItemDetail item={item}/>
      </div>
    
  )
}

export default ItemDetailContainer