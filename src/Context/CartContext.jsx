import {createContext, useContext, useState} from 'react'



const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

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
    };
    
    const sameItem = (selection) => {
        const find = cartList.find( (i) =>{
            return i.name === selection
        })
        return find
    };

    const totalPrice = () =>{
        return cartList.reduce((acumulador , prod)=> acumulador = acumulador + prod.price , 0 )
    };

    const totalQuantity = () =>{
        return cartList.reduce((acumulador, prod)=> acumulador += prod.quantity, 0)
    };

    const removeItemInCart= (item) =>{
        const removeItem = [...cartList]
        const itemClear = removeItem.filter(product => product.name !== item)
        return setCartList(itemClear)
    } 

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