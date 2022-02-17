import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [detailProduct, setDetailProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const dataBase = getFirestore()
        const itemDetail = doc(dataBase, 'productos', id) 
        getDoc(itemDetail)
        .then(resp => setDetailProduct( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [id])


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
        <ItemDetail detail = {detailProduct}/>
        }
    </div>;
};

export default ItemDetailContainer;