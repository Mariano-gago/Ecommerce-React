import React from 'react'
import {getFirestore, collection, addDoc, documentId, where, writeBatch, getDocs, query} from 'firebase/firestore'
import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css'


const Form = () => {
    const [id, setId] = useState('');
    const [errors, setErrors]= useState({});
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
        
        let orden = {};
        orden.buyer = dataForm; 
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
        });

        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'orders');
        await addDoc (ordersCollection, orden)
            .then(resp => setId(resp.id)); 
        
        const queryCollection = collection(dataBase, 'productos');
        const queryActualizarStock = query( queryCollection, where( documentId (), 'in', cartList.map(x=> x.id)));
        const batch = writeBatch(dataBase);
    
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
            cleanCart();
        });
        batch.commit();
        }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setDataForm({
        ...dataForm,
        [name]: value
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(dataForm))
    }
    
    const validateForm = (dataForm)=>{

        let errors = {};

        if (!dataForm.name){
            errors.name = "El campo es obligatorio"
        }
        if (!dataForm.idNumber){
            errors.idNumber = "El campo es obligatorio"
        }
        if (!dataForm.adress){
            errors.adress = "El campo es obligatorio"
        }
        if (!dataForm.email){
            errors.email = "El campo es obligatorio"
        }
        if (!dataForm.telephone){
            errors.telephone = "El campo es obligatorio"
        }

        return errors;
    };

    return (
        <div>
            <h4 className="btn-outline-success" >{id !== '' && `Compra finalizada su numero de ticket es : ${id}` }</h4>

            <form className='container mt-5' onSubmit={purchase}>
                <div>
                    <p className='titulo-form'>Completa los datos para finalizar la compra</p>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className="input-group mb-3 ">
                            <span className="input-group-text" id="basic-addon1">Nombre y apellido</span>
                            <input type="text" className="form-control" aria-label="Name and last name" name='name' onBlur={handleBlur}  onChange={handleChange} value={dataForm.name} aria-describedby="basic-addon1"/>
                        </div>
                        <div>
                            {errors.name && <p className='message-error'>{errors.name}</p>}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Numero de documento</span>
                            <input type="number" className="form-control"  aria-label="Id number" name='idNumber' onBlur={handleBlur} onChange={handleChange} value={dataForm.idNumber} aria-describedby="basic-addon2"/>
                        </div>
                        <div>
                            {errors.idNumber && <p className='message-error'>{errors.idNumber}</p>}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Direccion</span>
                            <input type="text" className="form-control" name='adress' onBlur={handleBlur} onChange={handleChange} value={dataForm.adress} id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <div>
                            {errors.adress && <p className='message-error'>{errors.adress}</p>}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Email</span>
                            <input type="email" className="form-control" name='email' onBlur={handleBlur} onChange={handleChange} value={dataForm.email} aria-label="email"/>
                        </div>
                        <div>
                            {errors.email && <p className='message-error'>{errors.email}</p>}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Telefono</span>
                            <input type="number" className="form-control" name='telephone' onBlur={handleBlur} onChange={handleChange} value={dataForm.telephone} aria-label="email"/>
                        </div>
                        <div>
                            {errors.telephone && <p className='message-error'>{errors.telephone}</p>}
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
        </div>
            )
        };

export default Form;
