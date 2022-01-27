import productos from './productos'



const getProductos = () => {
    return new Promise ((resolve, rejet) =>{
        setTimeout( () => resolve (productos), 2000);
    });
};
export default getProductos;