import {useState} from 'react';
import './ItemCountStyle.css';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState (initial);

    const addUp = () => {        
        if(count < stock){
            setCount( count +1)
        }
    };

    const subtract = ()=> {
        if(count > initial){
            setCount( count -1)
        }
    };

    const add = () => {
        onAdd(count)
    };

    return (<div>
                <div>
                    <button className='btn btn-modo m-3' onClick={subtract}> - </button>
                    {count}
                    <button className='btn btn-modo  m-3' onClick={addUp}> + </button>
                    </div>
                    <div>
                        <button className='btn btn-agregar' onClick={add}> Agregar al carrito </button>
                </div>
            </div>);
};

