import React from 'react';
import Image from '../../Img/LogoCarrito.svg'
import { useCartContext } from '../../Context/CartContext';




export const ImgCarrito = () => {
    const {totalQuantity} = useCartContext([]);
    //console.log(totalQuantity);
    return <div>
                <button type="button" className="btn  position-relative">
                    <img src={Image} alt='Logo' width={30}/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalQuantity() !== 0 && totalQuantity()}
                    </span>
                </button>
            </div>;
};

