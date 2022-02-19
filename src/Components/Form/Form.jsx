import React from 'react'
import {getFirestore, collection, addDoc, documentId, where, writeBatch, getDocs, query} from 'firebase/firestore'
import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css'


const Form = () => {
    const [id, setId] = useState('')
    const {cartList, cleanCart, totalPrice} = useCartContext([]);
    const [dataForm, setDataForm] = useState({
        name:'',
        idNumber:'',
        adress:'',
        email:'',
        telephone:''
    })


    const purchase = async (e)=>{
        e.preventDefault();
        
        let orden = {}
        orden.buyer = dataForm 
        orden.total = totalPrice();
        orden.items = cartList.map(cartItem =>{

            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price;
            const quantity = cartItem.quantity;
        return{
            id,
            name,
            price,
            quantity
            }
        })

    
        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'orders');
        await addDoc (ordersCollection, orden)
        .then(resp => setId(resp.id)); 
        
        const queryCollection = collection(dataBase, 'productos');
        const queryActualizarStock = query(
        queryCollection,
        where( documentId (), 'in', cartList.map(x=> x.id))
        );
        const batch = writeBatch(dataBase)
    
        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find (item => item.id === res.id).quantity
            })
        ))
        .catch(err => console.log(err))
        .finally(()=> {
            setDataForm({
                name:'',
                idNumber:'',
                adress:'',
                email:'',
                telephone:''
            })
            cleanCart()
        })
        batch.commit()
        }
    const handleChange = (e)=>{
        
        setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
        })
    }

    return (
            <form className='container mt-5' onSubmit={purchase}>
                <div>
                    <p className='titulo-form'>Completa los datos para finalizar la compra</p>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className="input-group mb-3 ">
                            <span className="input-group-text" id="basic-addon1">Nombre y apellido</span>
                            <input type="text" className="form-control" aria-label="Name and last name" name='name'  onChange={handleChange} value={dataForm.name} aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Numero de documento</span>
                            <input type="number" className="form-control"  aria-label="Id number" name='idNumber' onChange={handleChange} value={dataForm.idNumber} aria-describedby="basic-addon2"/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Direccion</span>
                            <input type="text" className="form-control" name='adress' onChange={handleChange} value={dataForm.adress} id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Email</span>
                            <input type="email" className="form-control" name='email' onChange={handleChange} value={dataForm.email} aria-label="email"/>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Telefono</span>
                            <input type="number" className="form-control" name='telephone' onChange={handleChange} value={dataForm.telephone} aria-label="email"/>
                        </div>
                    </div>
                </div>

                    

                    <div>
                        <button className='btn btn-success m-2'>Comprar</button>
                    <Link to='/'>
                        <button className='btn btn-danger m-2'>Cancelar</button>
                    </Link>
                    </div>
                </form>

            )
        }

export default Form;
