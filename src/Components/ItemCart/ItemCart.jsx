import {useCartContext} from '../../Context/CartContext'

export const ItemCart = () => {
    const {cartList, removeItemInCart} = useCartContext([]);
    
  return (
    <div>{cartList.map( product => 
        <div key={product.id}>
            <img className='m-3' width={70} src={product.img} alt=""/>
                {product.name} - CANTIDAD: {product.quantity} - PRECIO: $ {product.price}
            <button className='m-3 btn btn-outline-danger' onClick={()=> removeItemInCart(product.name)}>x</button>
        </div>)}</div>
  )
}
