import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'



const Item = ({id, name, info, precio, img, stock, onAdd}) => {
    //console.log(name);
    //console.log(name);
    //console.log(img);

    

    return (
            <div className="col-4">
                <div className="card mt-5 " >
                    <div className="card-header">
                        {name}
                    </div>
                    <div className="card-body">
                        <img width={250} src={img} alt='' />            
                        <div>
                            <p>{info}</p> 
                        </div>
                        <div>
                            <p>${precio}</p>
                        </div>                                                           
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${id}`}>
                            <button> DETALLE DEL PRODUCTO</button>
                        </Link>
                    </div>
                </div>
            </div>

)}

export default Item