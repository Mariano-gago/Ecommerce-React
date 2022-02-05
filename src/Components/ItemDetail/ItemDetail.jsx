import React, { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';




const ItemDetail = ({detalle}) => {
    //console.log(detalle);
    const { agregarCarrito} =  useCartContext()
    const [count, setCount] = useState(0);

    function onAdd (cant){
        setCount(cant);
        agregarCarrito({...detalle, cantidad: cant});
    }
    
    //console.log(cartList);
    return <div>
                <div className='Container'>
                    <div className='row m-5'>
                        <div className='col-6'>
                            <img className='size' alt='' src={detalle.imgDetalle}></img>
                        </div>
                        <div className='col-6 info'>
                            <h1>{detalle.name}</h1>
                            <p>{detalle.info}</p>
                            {count === 0 ? 
                                    <ItemCount initial = {1} stock = {detalle.stock} onAdd={onAdd} /> 
                                    :
                                    <>
                                    <Link to='/Cart'>
                                        <button className='btn btn-compra' >Terminar Compra</button>
                                    </Link>
                                    <Link to='/'>
                                        <button className='btn btn-compra'>Seguir Comprando</button>
                                    </Link>
                                    </>
                                    
                            }
                            
                        </div>
                    </div>
                </div>
            </div>;
};

export default ItemDetail;