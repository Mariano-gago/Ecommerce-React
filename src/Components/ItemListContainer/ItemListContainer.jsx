import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoria} = useParams();

        useEffect(()=> {
            setLoading(true);
            const dataBase = getFirestore();
            const dataBaseCollection = collection(dataBase, 'productos');

            const queryFilter = !categoria ? 
            dataBaseCollection
            : 
            query(dataBaseCollection, 
                where('category', '==', categoria)
            );

            getDocs(queryFilter)
                .then(resp => setProductsList( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))

            }, [categoria]);


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
            <ItemList className='' list={productsList}/>
            }
            </div>
        </div>
    );
};

export default ItemListContainer
