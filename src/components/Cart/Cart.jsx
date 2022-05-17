import CartItem from "../CartItem/CartItem";
import "./Cart.css"
import {NavLink} from "react-router-dom"
import { useCartContext } from "../context/CartContextProvider";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";


const Cart = () => {
    const {cartList, emptyCart, totalPrice} = useCartContext()


    return (
        <div className="cartDiv">
        {cartList.map((item) => (
        <CartItem key={item.id} item={item}/>
        ))
}
    {cartList.length > 0 ? (
        <>
        <div className="cartTotal">
            <h1>Total: $ {totalPrice()}</h1>
            <NavLink to='/'><button className="btnContinue">Seguir Comprando</button></NavLink>
            <button className="btnEmpty" onClick={() => emptyCart()}>Vaciar Carrito</button>
            <ButtonDefault title={"TERMINAR COMPRA"} />
        </div>
        </>
    )
: (
        <>
            <h1>El carrito está vacío. Comience a comprar!</h1>
            <NavLink to='/'><ButtonDefault title={"VER PRODUCTOS"} /></NavLink>
        </>
    )}
        </div>
    )
}



export default Cart