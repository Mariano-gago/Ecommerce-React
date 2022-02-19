import {createContext, useContext, useState} from 'react'
import React from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    //Agrega Items al carrito
    const addToCart = (item) => {
        const totalPrice = (item.price * item.quantity);

        if ( sameItem (item.name)){

            const totalQuantity = [...cartList];
            
            totalQuantity.forEach(i => {
                if (i.name === item.name){
                    i.quantity += item.quantity
                    i.price += totalPrice
                }
            })
            return setCartList (totalQuantity)
        }
        return setCartList([...cartList, { id: item.id, name: item.name, img: item.img,  price: totalPrice, quantity: item.quantity}])
    }
    
    //Evita productos duplicados en el carrito
    const sameItem = (selection) => {
        const find = cartList.find( (i) =>{
            return i.name === selection
        })
        return find
    }

    //Calcula la suma total de todos los productos seleccionados
    const totalPrice = () =>{
        return cartList.reduce((acumulador , prod)=> acumulador = acumulador + prod.price , 0 )
    }

    //Calcula la cantidad total para mostrar en el widget del carrito
    const totalQuantity = () =>{
        return cartList.reduce((acumulador, prod)=> acumulador += prod.quantity, 0)
    }

    //Borra el producto del carrito
    const removeItemInCart= (item) =>{
        //Borra de a un producto pero no funciona bien...
        
        /* const isInCart= cartList.find((prod)=> prod.id === item.id);

        if(isInCart.cantidad === 1){
            setCartList(cartList.filter((prod)=> prod.id !== item.id))
        }else{
            setCartList(
                cartList.map((x)=>
                x.id === item.id?{...isInCart, cantidad: isInCart.cantidad - 1}: x
            )
            )
        } */
        //Borra todo el producto
        const removeItem = [...cartList]
        const itemClear = removeItem.filter(product => product.name !== item)
        return setCartList(itemClear)
    } 

    //Vacia el carrito completo
    const cleanCart = () =>{
        setCartList([]);
    }

    return <cartContext.Provider value= {{
        cartList,
        addToCart,
        cleanCart,
        totalPrice,
        totalQuantity,
        removeItemInCart
    }}>
            {children}
            </cartContext.Provider>;
};

export default CartContextProvider;