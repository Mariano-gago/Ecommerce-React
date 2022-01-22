import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import  Spinner  from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import { GetProductos } from '../../Helpers/productos';
import { Item } from './Item';



export const ItemList = () => {
    const [productos, setProductos ] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        
        GetProductos
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
        .finally(()=> setloading(false))       
    }, [])
    

function onAdd (cant){
    console.log(cant);
}

    //console.log(GetProductos)
    return <div>
            { loading ? <Spinner className= "mt-5" animation="grow" variant="info" /> :
                            productos.map( producto => <div key={producto.id} className='col-md-4'>                        
                                <div className="card w-100 mt-5" >
                                    <div className="card-header">
                                        {producto.name}
                                    </div>
                                    <div className="card-body">
                                        <img src={producto.img} alt='' />            
                                        <div>
                                            <p>{producto.info}</p>
                                            {/* <Item productos= {producto}/> */} 
                                        </div>
                                        <div>
                                            <p>${producto.price}</p>
                                        </div>                                                           
                                    </div>
                                    <div className="card-footer">
                                        <ItemCount initial = {1} stock = {producto.stock} onAdd={onAdd} />                                                         
                                    </div>
                                </div>
                                </div>)}        
            </div>;
};
