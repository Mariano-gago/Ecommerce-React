import {createContext, useContext, useState} from 'react'
import React from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const agregarCarrito = (item) => {
        //console.log(item);
        setCartList([...cartList, item])
    }

    const vaciarCarrito = () =>{
        setCartList([]);
    }


    return <cartContext.Provider value= {{
        cartList,
        agregarCarrito,
        vaciarCarrito
    }}>
            {children}
            </cartContext.Provider>;
};

export default CartContextProvider;