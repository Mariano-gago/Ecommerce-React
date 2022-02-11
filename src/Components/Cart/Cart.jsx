import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css'




const Cart = () => {
  const {cartList, borrarProductoEnCart, vaciarCarrito, sumaTotal} = useCartContext([]);

  //console.log(cartList.length);
  return <div>
              {cartList.length !== 0 ?
              <>
              {cartList.map( producto => <div>
                                              <img className='m-3' width={70} src={producto.img} alt=""></img>
                                              {producto.name} - CANTIDAD: {producto.cantidad} - PRECIO: $ {producto.precio}
                                          <button className='m-3 btn btn-outline-danger' onClick={()=> borrarProductoEnCart(producto.name)}>x</button>
                                      </div>)}

                                      <div className='precio'>
                                        {`TOTAL: $${sumaTotal()}`}
                                      </div>

                <button className='btn btn-success'>FINALIZAR COMPRA</button>
                <button className='btn btn-danger' onClick={vaciarCarrito}>VACIAR CARRITO</button>
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
