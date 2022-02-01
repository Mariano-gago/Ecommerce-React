import ImgChocolate from '../Img/chocolate.png'
import ImgMerengue from '../Img/merengue.png'
import ImgCacao from '../Img/AlfajorCacao.jpg'
import ImgNuez from '../Img/nuez.png'
import ImgConoCacao from '../Img/HavannetCacaox1.jpg'
import ImgConoChocolate from '../Img/conochocolate.png'
import ImgCookieLimon from '../Img/cookieLimon.jpg'
import ImgCookieChoco from '../Img/cookieChoco.png'
import ImgDetalleChoco from '../Img/alfajorChocolatex12.jpg'
import ImgDetalleNuez from '../Img/Alfajor-Nuez-x-12.jpg'
import ImgDetalleMerengue from '../Img/alfajorMerengue.jpg'
import ImgDetalleChocoCacao from '../Img/alfajorCacaox12.jpg'
import ImgDetalleConitos from '../Img/Havannetsx6.jpg'
import ImgDetalleConitoCacao from '../Img/HavannetCacao.jpg'
import ImgDetalleCookiesLimon from '../Img/cajaCookieLimon.jpg'
import ImgDetalleCookiesChoco from '../Img/cajaCookieChoco.jpg'




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
        name: "ALFAJOR DE MERENGUE",
        info: "Alfajor relleno con Dulce de leche y cubierto con Merengue.",
        detalle: "Alfajor relleno de dulce de leche y cobertura de merengue.",
        imgDetalle: ImgDetalleMerengue,
        precio: 95,
        img: ImgMerengue,
        cantidad: 1,
        stock: 150

    },
    {
        id: "3",
        categoria: "alfajores",
        name: "ALFAJOR DE NUEZ",
        info: "Alfajor de dulce de leche, cajú y nueces, cubierto de chocolate blanco.",
        detalle: "Alfajor de dulce de leche, cajú y nueces, cubierto de chocolate blanco.",
        imgDetalle: ImgDetalleNuez,
        precio: 130,
        img: ImgNuez,
        cantidad: 1,
        stock: 85
    },
    {
        id: "4",
        categoria: "alfajores",
        name: "ALFAJOR DE CHOCOLATE 70% Cacao",
        info: "Alfajor relleno con Dulce de leche y cubierto con 70% puro cacao.",
        detalle: "Alfajor relleno de dulce de leche y cubierto con 70% puro cacao.",
        imgDetalle: ImgDetalleChocoCacao,
        precio: 95,
        img: ImgCacao,
        cantidad: 1,
        stock: 190
    },
    {
        id: "5",
        categoria: "conitos",
        name: " CONITOS DE CHOCOLATE",
        info: "Conito relleno con Dulce de leche y cubierto con Chocolate semiamargo.",
        detalle: "Conito relleno con Dulce de leche y cubierto con Chocolate semiamargo.",
        imgDetalle: ImgDetalleConitos,
        precio: 95,
        img: ImgConoChocolate,
        cantidad: 1,
        stock: 190
    },
    {
        id: "6",
        categoria: "conitos",
        name: "CONITOS DE CHOCOLATE 70% CACAO",
        info: "Conito relleno con Dulce de leche y cubierto con un exquisito chocolate 70% Cacao.",
        detalle: "Conito relleno con Dulce de leche y cubierto con Chocolate semiamargo.",
        imgDetalle: ImgDetalleConitoCacao,
        precio: 95,
        img: ImgConoCacao,
        cantidad: 1,
        stock: 190
    },
    {
        id: "7",
        categoria: "cookies",
        name: "GALLETITAS DE LIMON",
        info: "Galletitas de limon rellena con una dulce crema de Limon.",
        detalle: "Galletitas de limon rellena con una dulce crema de Limon.",
        imgDetalle: ImgDetalleCookiesLimon,
        precio: 95,
        img: ImgCookieLimon,
        cantidad: 1,
        stock: 190
    },
    {
        id: "8",
        categoria: "cookies",
        name: "GALLETITAS DE LIMON CON COBERTURA D CHOCOLATE",
        info: "Galletitas de limon rellena con una dulce crema de Limon y cubierta con chocolate.",
        detalle: "Galletitas de limon rellena con una dulce crema de Limon y cubierta con chocolate.",
        imgDetalle: ImgDetalleCookiesChoco,
        precio: 95,
        img: ImgCookieChoco,
        cantidad: 1,
        stock: 190
    }
];

export default productos;