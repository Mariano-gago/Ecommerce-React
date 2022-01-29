import React from 'react';
import Item from '../Item/Item';


const ItemList = ({listado}) => {
    //console.log(listado);
    return (
    <div>
        {listado.map( (producto) => (
        <Item
        key= {producto.id}
        id= {producto.id}
        categoria= {producto.categoria}
        name= {producto.name}
        info= {producto.info}
        precio= {producto.precio}
        img= {producto.img}
        stock={producto.stock}
        />
        ))}
    </div>
    );
};

export default ItemList