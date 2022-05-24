import React, { useState } from 'react'
import "./CheckOut.css"
import { useCartContext } from '../context/CartContextProvider'
import db from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import PropagateLoader from "react-spinners/PropagateLoader";

function Checkout() {
    
    const [isLoading, setLoading] = useState(false);
    const {cartList, totalPrice, emptyCart} = useCartContext();
    const [orderId, setId] = useState();
    const [buyer, setBuyer] = useState({
        Name: "",
        Email: "",
        PhoneNumber: ""
    })

    const {Name, Email, PhoneNumber} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const saveOrder = async(dataOrder) => {
        setLoading(true)
        try {
            const col = collection (db, 'orders');
            const order = await addDoc(col, dataOrder);
            setId(order.id)
            console.log(orderId)
            emptyCart();
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const total = totalPrice();
        const day = new Date()
        const itemsBought = cartList.map (i=> {return {id:i.id, title:i.title, price:i.price, quantity:i.quantity}})
        const checkOrder = {buyer, itemsBought, day, total};
        saveOrder(checkOrder);
        
        
    }

  return (
    <div className='checkOutDiv'>
        <h1>Finalizando Compra</h1>

        {isLoading ?
            <div className='loader'>
                <PropagateLoader color={"white"} size={30} speedMultiplier={0.7} />
            </div>
            : (
                !orderId &&
            <div>
                <h4>Completar Datos:</h4>
                <form className='checkOutForm' onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="Name"
                        placeholder="Name"
                        value={Name} 
                        onChange={handleInputChange}
                        required
                        />
                    <input 
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={handleInputChange}
                        required
                        />
                    <input 
                        type="number"
                        name="PhoneNumber"
                        placeholder="Phone Number"
                        value={PhoneNumber} 
                        onChange={handleInputChange}
                        required
                        />
                    <input 
                        type="submit"
                        value="Finalizar Compra" />
                </form>
            </div>
            ) }

        {orderId &&
            <div>
                <h2>Su compra ha sido exitosa.</h2>
                <p>Su número de orden es : {orderId}.</p>
            </div>}
        
    </div>
  )
}

export default Checkout