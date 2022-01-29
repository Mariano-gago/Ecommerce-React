import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getProductos from '../../Helpers/getProductos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [ListadoProductos, setListadoProductos] = useState([]);
    
    const {categoria} = useParams()

        useEffect(()=> {

            if (categoria) {
                getProductos()
                .then(productos => setListadoProductos (productos.filter( prod => prod.categoria === categoria)))
                .catch((error) => console.log(error));
            }else{
                getProductos()
                .then(productos => setListadoProductos (productos))
                .catch((error) => console.log(error));
                
            }
        },[categoria])

        console.log(categoria);
    return (
        <div>
            <ItemList listado={ListadoProductos}/>
        </div>
    );
};

export default ItemListContainer
