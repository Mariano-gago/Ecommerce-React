import ImgChocolate from '../Img/chocolate.png'
import ImgMerengue from '../Img/merengue.png'
import ImgBlanco from '../Img/blanco1.png'
import ImgNuez from '../Img/nuez.png'
import ImgConoBlanco from '../Img/conoblanco.png'
import ImgConoChocolate from '../Img/conochocolate.png'
import ImgBarritaChoco2 from '../Img/barritachoco2.webp'
import ImgBarritaChoco3 from '../Img/barritachoco3.webp'
import ImgDetalleChoco from '../Img/alfajorChocolatex12.jpg'
import ImgDetalleNuez from '../Img/Alfajor-Nuez-x-12.jpg'



const productos = [
    {
        id: "1",
        categoria: "alfajores",
        name: "ALFAJOR DE CHOCOLATE",
        info: "Alfajor relleno de dulce de leche y cobertura de puro chocolate semiamargo.",
        detalle: "Alfajor relleno de dulce de leche y cobertura de puro chocolate semiamargo.",
        imgDetalle: ImgDetalleChoco,
        precio: 150,
        img: ImgChocolate,
        cantidad: 1,
        stock: 250
    },
    {
        id: "2",
        categoria: "alfajores",
        name: "MERENGUE",
        info: "Alfajor relleno con Dulce de leche y cubierto con Merengue.",
        precio: 95,
        img: ImgMerengue,
        cantidad: 1,
        stock: 150

    },
    {
        id: "3",
        categoria: "alfajores",
        name: "NUEZ",
        info: "Alfajor de dulce de leche, cajú y nueces, cubierto de chocolate blanco.",
        precio: 130,
        img: ImgNuez,
        imgDetalle: ImgDetalleNuez,
        cantidad: 1,
        stock: 85
    },
    {
        id: "4",
        categoria: "alfajores",
        name: "BLANCO",
        info: "Alfajor relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        precio: 95,
        img: ImgBlanco,
        cantidad: 1,
        stock: 190
    },
    {
        id: "5",
        categoria: "conitos",
        name: " CONITOS DE CHOCOLATE",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate semiamargo.",
        precio: 95,
        img: ImgConoChocolate,
        cantidad: 1,
        stock: 190
    },
    {
        id: "6",
        categoria: "conitos",
        name: "CONITOS DE CHOCOLATE BLANCO",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        precio: 95,
        img: ImgConoBlanco,
        cantidad: 1,
        stock: 190
    },
    {
        id: "7",
        categoria: "barras",
        name: "BARRAS DE CREAL BLANCO",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        precio: 95,
        img: ImgBarritaChoco3,
        cantidad: 1,
        stock: 190
    },
    {
        id: "8",
        categoria: "barras",
        name: "BARRAS DE CEREAL NEGRO",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate Blanco.",
        precio: 95,
        img: ImgBarritaChoco2,
        cantidad: 1,
        stock: 190
    }
];

export default productos;