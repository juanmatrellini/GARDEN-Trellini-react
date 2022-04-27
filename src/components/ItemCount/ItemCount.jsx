import React, { useState } from "react";
import "./ItemCount.css"

export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial)

    const handleAdd = () => {
        if (count < props.stock) {
            return setCount (count + 1)
        }
    }

    const handleLess = () => {
        if (count > props.initial) {
            return setCount(count - 1)
        } else if (count > 0 && count <= 1) {
            return count
        }
    }

    const buy = () => {
        console.log("Ha comprado " + count + " productos!")
    }

   

    return (
        <div>
            <div className="ItemCount">
                <h2>Producto 1</h2>
                <button className="btnLess" onClick={handleLess}>-</button>
                <span className="count">{count}</span>
                <button className="btnAdd" onClick={handleAdd}>+</button>
            </div>
            <div className="divBuy">
                <button className="btnBuy" onClick={buy}>COMPRAR</button>
            </div>
        </div>
    );
}

export default ItemCount;
