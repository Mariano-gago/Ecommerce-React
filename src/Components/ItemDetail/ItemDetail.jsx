import React, { useState } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';




const ItemDetail = ({detail}) => {
    const { addToCart} =  useCartContext()
    const [count, setCount] = useState(0);

    function onAdd (cant){
        setCount(cant);
        addToCart({...detail, quantity: cant});
    }
    return <div>
                <div className='Container'>
                    <div className='row m-5'>
                        <div className='col-6'>
                            <img className='size' alt='' src={detail.imgDetail}></img>
                        </div>
                        <div className='col-6 info'>
                            <h1>{detail.name}</h1>
                            <p>{detail.info}</p>
                            <p>Presentacion: Caja x 12 Unidades</p>
                            <p>$ {detail.price}</p>
                            {count === 0 ? 
                                    <ItemCount initial = {1} stock = {detail.stock} onAdd={onAdd} /> 
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