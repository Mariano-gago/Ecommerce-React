import { Link} from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { ItemCart } from '../ItemCart/ItemCart';
import TotalPrice from '../TotalPrice/TotalPrice'
import './Cart.css'



const Cart = () => {
  const {cartList} = useCartContext([]);
  
  return <div>
              
              {cartList.length !== 0 ?
              <>
              <ItemCart/>
              <TotalPrice/>
            </>:
                <div>
                  <h1 className='titulo-carrito'>Tu carrito esta vacio</h1>
                  
                  <Link to='/'>
                      <button className='btn btn-success'>Seguir comprando</button>
                  </Link>
                </div>
            }
        </div>;
};

export default Cart;
