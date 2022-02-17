import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css'




const Cart = () => {
  const {cartList, removeItemInCart, cleanCart, totalPrice} = useCartContext([]);


  

  //console.log(cartList.length);
  /* const realizarCompra = async (e)=>{
    //e.preventDefault();
  
    //Nuevo obj
    let orden = {}
    //orden.date = Timestamp.fromDate(new Date())
  
    orden.buyer = {name:'Mariano', email: 'mfgago@gmail.com', prhone: '123456789'}
    orden.total = sumaTotal();
  
    orden.items = cartList.map(cartItem =>{
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad;
  
      return{
        id,
        nombre,
        precio,
        cantidad
      }
    })
    console.log(orden);
    const db = getFirestore()
      const ordersCollection = collection(db, 'orders')
      await addDoc (ordersCollection, orden)
      .then(resp => console.log(resp)) 

    //Actualizar un documento
    const queryCollection = collection(db, 'productos')
    const queryDoc = doc(db, "productos",  ' oB67Xs9w1c4J4BTZok5F' )
    updateDoc(queryDoc, {stock: 99})
    .then(resp => console.log(resp))
  } */
    
    
    
    //Actualizar Stock  NO ES OBLIGATORIA

    /* const queryCollection = collection(db, 'productos')
    const queryActualizarStock = query(
      queryCollection,
      where( documentId (), 'in', cartList.map(it=> it.id))
    )
    
    const batch = writeBatch(db);

    await getDocs(queryActualizarStock)
    .then (resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find (item => item.item.id === res.id).cantidad
      })
    ))
    .catch(err => console.log(err))
    .finally(()=> console.log('stock actualizado')//llamar aca a "vaciar carrito")

  batch.commit()
  } */
  return <div>
              {cartList.length !== 0 ?
              <>
              {cartList.map( product => <div>
                                              <img className='m-3' width={70} src={product.img} alt=""></img>
                                              {product.name} - CANTIDAD: {product.quantity} - PRECIO: $ {product.price}
                                          <button className='m-3 btn btn-outline-danger' onClick={()=> removeItemInCart(product.name)}>x</button>
                                      </div>)}

                                      <div className='precio'>
                                        {`TOTAL: $${totalPrice()}`}
                                      </div>

                <button className='btn btn-success' /* onClick={()=> realizarCompra()} */>FINALIZAR COMPRA</button>
                <button className='btn btn-danger' onClick={cleanCart}>VACIAR CARRITO</button>
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
