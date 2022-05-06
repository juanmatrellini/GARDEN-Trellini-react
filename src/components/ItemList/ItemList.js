import React from 'react'
import Item from "../Item/Item"


const ItemList = ({ products }) => {
    return (
        <>
            {products.map((product) => {

                return (
                    <Item key={product.id} file={product.file}
                        title={product.title} price={product.price}
                        stock={product.stock} id={product.id} />
                )
            })
            }
        </>
    )
}

export default ItemList