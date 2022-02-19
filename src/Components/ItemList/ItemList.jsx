import React from 'react';
import Item from '../Item/Item';


const ItemList = ({list}) => {
    return (
            <div className='row'>
                {list.map( (product) => (
                <Item
                      key= {product.id}
                      id= {product.id}
                      category= {product.category}
                      name= {product.name}
                      info= {product.info}
                      price= {product.price}
                      img= {product.img}
                      stock={product.stock}
                />
                ))}
            </div>
    );
};

export default ItemList


