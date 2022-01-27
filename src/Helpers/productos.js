import ImgChocolate from '../Components/Img/chocolate.png'
import ImgMerengue from '../Components/Img/merengue.png'


const productos = [
    {
        id: "1",
        categoria: "Alfajores",
        name: "CHOCOLATE",
        info: "Alfajor relleno de dulce de leche y cobertura de puro chocolate semiamargo.",
        precio: 150,
        img: {ImgChocolate},
        cantidad: 1,
        stock: 250
    },
    {
        id: "2",
        categoria: "Alfajores",
        name: "MERENGUE",
        info: "Alfajor relleno con Dulce de leche y cubierto con Merengue.",
        precio: 95,
        img: {ImgMerengue},
        cantidad: 1,
        stock: 150

    },
    {
        id: "3",
        categoria: "Alfajores",
        name: "NUEZ",
        info: "Alfajor de dulce de leche, cajú y nueces, cubierto de chocolate blanco.",
        precio: 130,
        img: "../Componentes/Item/nuez.png",
        cantidad: 1,
        stock: 85
    },
    {
        id: "4",
        categoria: "Alfajores",
        name: "BLANCO",
        info: "Alfajor relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        precio: 95,
        img: "Img/blanco1.png",
        cantidad: 1,
        stock: 190
    },
    {
        id: "5",
        categoria: "Conitos",
        name: "CHOCOLATE",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate semiamargo.",
        precio: 95,
        img: "Img/conochocolate.png",
        cantidad: 1,
        stock: 190
    },
    {
        id: "6",
        categoria: "Conitos",
        name: "BLANCO",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        precio: 95,
        img: "Img/conoblanco.png",
        cantidad: 1,
        stock: 190
    }
];

export default productos;