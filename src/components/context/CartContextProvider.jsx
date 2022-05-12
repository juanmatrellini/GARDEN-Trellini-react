import {createContext, useContext, useState} from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ( {children} ) => {
    const [cartList, setCartList] = useState([]);

    const inCart = (id) => {
        return cartList.some((item) => item.id == id);
    };

    const addItem = (item, quantity) => {
        if (inCart(item.id)) {
            return setCartList(
                cartList.map((product) => product.id == item.id 
                ? {...product, quantity: product.quantity + quantity} 
                : product
                )
            );
        }
        setCartList([...cartList, {...item, quantity}])
    }

    const emptyCart = () => {
        setCartList([]);
    };

    const deleteItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    }

    const removeOneUnit = (id) => {
        if (unitsPerProduct(id) === 1) {
            return deleteItem(id)
        }
        setCartList(
            cartList.map((product) =>
            product.id == id
            ? {...product, quantity: product.quantity -1}
            : product
            )
        );
    };

    const addOneUnit = (id) => {
        setCartList(
            cartList.map((product) =>
            product.id == id
            ? {...product, quantity: product.quantity +1}
            : product
            )
        )
    }

    const totalCount = () => {
        return cartList.reduce((total, item) => total + item.quantity, 0);
    }

    const totalPrice = () => {
        return cartList.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const unitsPerProduct = (id) => {
        const foundInCart = cartList.find((item) => item.id == id);
        return foundInCart ? foundInCart.quantity : 0
    }

    return (
        <CartContext.Provider
            value={{
                cartList,
                addItem,
                emptyCart,
                deleteItem,
                totalCount,
                totalPrice,
                removeOneUnit,
                addOneUnit,
                unitsPerProduct
        }}
        >
         {children}   

        </CartContext.Provider>
        )








}

export default CartContextProvider