import { Link } from 'react-router-dom';
import './Item.css'



const Item = ({id, name, price, img}) => {

    return (
            <div className="col-4">
                <div className="card mt-5 " >
                    <div className="card-header">
                        {name}
                    </div>
                    <div className="card-body">
                        <img width={250} src={img} alt='' />            
                        <p>${price} x Docena</p>                                                          
                    </div>
                    <div className="card-footer">
                        <Link to={`/detalle/${id}`}>
                            <button className='btn btn-compra text-white'> DETALLE DEL PRODUCTO</button>
                        </Link>
                    </div>
                </div>
            </div>
)};

export default Item;



