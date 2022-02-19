import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer  from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import Form from './Components/Form/Form'
import { Footer } from './Components/Footer/Footer';



function App() {
    return (
      <BrowserRouter>
        <CartContextProvider>
          <div className="App">
            <NavBar/>
            <Routes>
              <Route exact path='/' element={ <ItemListContainer />}/>
              <Route exact path='/categoria/:categoria' element={ <ItemListContainer />}/>
              <Route exact path='/detalle/:id' element={ <ItemDetailContainer />}/>
              <Route exact path='/cart' element={ <Cart />}/>
              <Route exact path='/form' element={ <Form/>}/>
            </Routes>
            <Footer/>
          </div>
        </CartContextProvider>
      </BrowserRouter>
    );
  }
  
  export default App;


