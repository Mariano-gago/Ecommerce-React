
import { useCartContext } from '../../Context/CartContext';
import './Cart.css'




const Cart = () => {
  const {cartList, borrarProductoEnCart, vaciarCarrito} = useCartContext([]);

  //console.log(cartList);
  return <div>
      { cartList === [] ?
      <h1>No hay productos seleccionados</h1>:
      cartList.map( producto => <div className='m-5 border' key={producto.id}>
                                    <img className='m-3' width={70} src={producto.img} alt=""></img>
                                {producto.name} - CANTIDAD: {producto.cantidad} - PRECIO: $ {producto.precio}
              <button className='m-3 btn btn-outline-danger' onClick={()=> borrarProductoEnCart(producto.name)}>x</button>
                                </div>)}

      <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar carrito</button>

    </div>;
} 

export default Cart
