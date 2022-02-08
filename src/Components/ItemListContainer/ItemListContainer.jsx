import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getProductos from '../../Helpers/getProductos';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
    const [ListadoProductos, setListadoProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {categoria} = useParams()

        useEffect(()=> {
            getProductos()
            .then ((productos)=>
            setListadoProductos(
                categoria
                        ? productos.filter ((prod)=> prod.categoria === categoria)
                        : productos
            ))
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false))
        },[categoria])

        //console.log(categoria);
    return (
        <div className='container'>
            <div>
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
            <ItemList className='' listado={ListadoProductos}/>
            }
            </div>
            
        </div>
    );
};

export default ItemListContainer
