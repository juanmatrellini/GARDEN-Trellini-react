import CartItem from "../CartItem/CartItem";
import "./Cart.css"
import {Link} from "react-router-dom"
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
            <Link to='/'><button className="btnContinue">Seguir Comprando</button></Link>
            <button className="btnEmpty" onClick={() => emptyCart()}>Vaciar Carrito</button>
            <Link to='/checkout'><ButtonDefault title={"TERMINAR COMPRA"} /></Link>
        </div>
        </>
    )
: (
        <>
            <h1>El carrito está vacío. Comience a comprar!</h1>
            <Link to='/'><ButtonDefault title={"VER PRODUCTOS"} /></Link>
        </>
    )}
        </div>
    )
}



export default Cart