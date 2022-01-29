import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import getProductos from '../../Helpers/getProductos';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [DetalleProducto, setDetalleProducto] = useState([]);
    const {id} = useParams();
    console.log(DetalleProducto);

    useEffect(()=> {

        if (id) {
            
            getProductos()
            .then(productos => setDetalleProducto (productos.find( prod => prod.id === id)))
            .catch((error) => console.log(error));
        }else{
            getProductos()
            .then(productos => setDetalleProducto (productos))
            .catch((error) => console.log(error));
            
        }
    },[id]) 

    //console.log(id);
    //console.log(DetalleProducto);
    return <div>
        <ItemDetail detalle = {DetalleProducto}/>
    </div>;
};

export default ItemDetailContainer;