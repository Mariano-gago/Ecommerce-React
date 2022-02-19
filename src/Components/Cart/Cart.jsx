import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';

import './Cart.css'



const Cart = () => {

  const {cartList, removeItemInCart, cleanCart, totalPrice} = useCartContext([]);

  return <div>
              {cartList.length !== 0 ?
              <>
              {cartList.map( product => 
              <div>
                  <img className='m-3' width={70} src={product.img} alt=""/>
                    {product.name} - CANTIDAD: {product.quantity} - PRECIO: $ {product.price}
                  <button className='m-3 btn btn-outline-danger' onClick={()=> removeItemInCart(product.name)}>x</button>
              </div>)}

              
              <div className='border'>
              <div className='precio'>
                    {`TOTAL: $${totalPrice()}`}
              </div>

              <NavLink to='/form'>  
                <button className='btn btn-success m-3' >Finalizar compra</button>
              </NavLink>
                <button className='btn btn-danger m-3' onClick={cleanCart}>VACIAR CARRITO</button>
              </div>
            </>:
                <div>
                  <h1 className='titulo-carrito'>Tu carrito esta vacio</h1>
                  
                  <Link to='/'>
                      <button className='btn btn-success'>Seguir comprando</button>
                  </Link>
                </div>
      }
        </div>;
} 

export default Cart
