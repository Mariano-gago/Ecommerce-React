import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';


const Item = ({name, info, precio, img, stock, onAdd}) => {
    //console.log(name);
    //console.log(name);
    //console.log(img);

    function onAdd (cant){
        console.log(cant);
    }

    return (
            <div>
                <div className="card w-25 mt-5" >
                    <div className="card-header">
                        {name}
                    </div>
                    <div className="card-body">
                        <img src={img} alt='' />            
                        <div>
                            <p>{info}</p> 
                        </div>
                        <div>
                            <p>${precio}</p>
                        </div>                                                           
                    </div>
                    <div className="card-footer">
                            <button> DETALLE DEL PRODUCTO</button>
                    <ItemCount initial = {1} stock = {stock} onAdd={onAdd} />                                                       
                    </div>
                </div>
            </div>

)}

export default Item