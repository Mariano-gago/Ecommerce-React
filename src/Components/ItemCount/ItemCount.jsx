import React, { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(initial)
    //console.log(stock);
    const aumentar = () => {
        //console.log("suma");

        if (contador < stock){
            setContador (contador +1 );
        }
    }

    const restar = () =>{
        //console.log("resta");
        if (contador > initial){
            setContador (contador -1)
        }
    }

    const agregar = () =>{
        //console.log(contador);
        onAdd (contador)
    }
    
    return (
            <div>
                <div>
                <button className='btn btn-primary m-3' onClick={restar}> - </button>
                {contador}
                <button className='btn btn-primary m-3' onClick={aumentar}> + </button>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={agregar}> Agregar al carrito </button>
                </div>
            </div>);
};
