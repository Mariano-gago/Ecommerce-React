import {createContext, useContext, useState} from 'react'
import React from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    //Agrega Items al carrito
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
    
    //Evita productos duplicados en el carrito
    const duplicados = (seleccion) => {
        //console.log(seleccion);
        const find = cartList.find( (i) =>{
            return i.name === seleccion
        })
        return find
    }

    //Calcula la suma total de todos los productos seleccionados
    const sumaTotal = () =>{
        return cartList.reduce((acumulador , prod)=> acumulador = acumulador + prod.precio , 0 )
    }

    //Calcula la cantidad total para mostrar en el widget del carrito
    const cantidadTotal = () =>{
        return cartList.reduce((acumulador, prod)=> acumulador += prod.cantidad, 0)
    }

    //Borra el producto del carrito
    const borrarProductoEnCart = (item) =>{
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
        const borrarItem = [...cartList]
        const itemBorrado = borrarItem.filter(producto => producto.name !== item)
        return setCartList(itemBorrado)
    } 

    //Vacia el carrito completo
    const vaciarCarrito = () =>{
        setCartList([]);
    }

    return <cartContext.Provider value= {{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        sumaTotal,
        cantidadTotal,
        borrarProductoEnCart
    }}>
            {children}
            </cartContext.Provider>;
};

export default CartContextProvider;