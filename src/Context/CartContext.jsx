import {createContext, useContext, useState} from 'react'
import React from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);


    const agregarCarrito = (item) => {
        //console.log(item.cantidad);
        //console.log(item.precio);
        const precioTotal = (item.precio * item.cantidad);

        if ( duplicados(item.name)){

            const cantidadTotal = [...cartList];
            
            cantidadTotal.forEach(i => {
                if (i.name === item.name){
                    i.cantidad += item.cantidad
                    i.precio += precioTotal
                }
            })
            return setCartList (cantidadTotal)
        }
        return setCartList([...cartList, {name: item.name, img:item.img,  precio: precioTotal, cantidad: item.cantidad}])
    }

    const duplicados = (seleccion) => {
        //console.log(seleccion);
        const find = cartList.find( (i) =>{
            return i.name === seleccion
        })
    return find
    }

    const borrarProductoEnCart = (item) =>{
        const borrarItem = [...cartList]
        const itemBorrado = borrarItem.filter(producto => producto.name !== item)
        return setCartList(itemBorrado)
    } 


    const vaciarCarrito = () =>{
        setCartList([]);
    }


    return <cartContext.Provider value= {{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        borrarProductoEnCart
    }}>
            {children}
            </cartContext.Provider>;
};

export default CartContextProvider;