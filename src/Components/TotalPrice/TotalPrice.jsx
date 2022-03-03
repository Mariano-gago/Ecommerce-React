import { useCartContext } from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';

const TotalPrice = () => {

        const {totalPrice, cleanCart} = useCartContext([]);

        return <div className='border'>
                <div className='precio'>
                        {`TOTAL: $${totalPrice()}`}
                </div>
                        <NavLink to='/form'>  
                                <button className='btn btn-success m-3' >Finalizar compra</button>
                        </NavLink>
                                <button className='btn btn-danger m-3' onClick={cleanCart}>VACIAR CARRITO</button>
                </div>
};

export default TotalPrice;
