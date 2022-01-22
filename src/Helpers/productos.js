

const productos = [
    {
        id: "1",
        name: "CHOCOLATE",
        info: "Alfajor relleno de dulce de leche y cobertura de puro chocolate semiamargo.",
        price: 150,
        img: "Img/chocolate.png",
        cantidad: 1,
        stock: 250
    },
    {
        id: "2",
        name: "MERENGUE",
        info: "Alfajor relleno con Dulce de leche y cubierto con Merengue.",
        price: 95,
        img: "Img/merengue.png",
        cantidad: 1,
        stock: 150

    },
    {
        id: "3",
        name: "NUEZ",
        info: "Alfajor de dulce de leche, cajú y nueces, cubierto de chocolate blanco.",
        price: 130,
        img: "Img/nuez.png",
        cantidad: 1,
        stock: 85
    },
    {
        id: "4",
        name: "BLANCO",
        info: "Alfajor relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        price: 95,
        img: "Img/blanco1.png",
        cantidad: 1,
        stock: 190
    }
];

export const GetProductos = new Promise( (respuesta, reject)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            
            respuesta(productos)        
        }, 2000)
    }else{
        reject('404 not found')
    }
} )