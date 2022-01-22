import React from 'react';



//Paso como parametro el array de producto
export const Item = (producto) => {
    console.log(producto);

    return <div><p>{producto.info}</p></div>;
};
