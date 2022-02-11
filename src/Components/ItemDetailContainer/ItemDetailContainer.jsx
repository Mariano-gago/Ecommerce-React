import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import getProductos from '../../Helpers/getProductos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    //console.log(detalleProducto);

    useEffect(()=> {
            getProductos()
            .then(productos => setDetalleProducto (productos.find( prod => prod.id === id)))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
    },[id]) 

    //console.log(id);
    return <div>
        {
            loading ? <Spinner
            className='m-5'
            variant="info"
            animation="grow"
            size="xl"
            role="status"
            aria-hidden="true"
        />
        :
        <ItemDetail detalle = {detalleProducto}/>
        }
    </div>;
};

export default ItemDetailContainer;