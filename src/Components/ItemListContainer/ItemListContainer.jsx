import React, {useState, useEffect} from 'react';
import getProductos from '../../Helpers/getProductos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [ListadoProductos, setListadoProductos] = useState([]);
    const categoria = "Alfajores";

        useEffect(()=> {
            getProductos()
            .then(productos => setListadoProductos (productos))
            .catch((error) => console.log(error));
        },[])

    return (
        <div>
            <ItemList listado={ListadoProductos}/>
        </div>
    );
};

export default ItemListContainer
