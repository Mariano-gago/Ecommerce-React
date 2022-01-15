
import './App.css';
import NavBar from './NavBar/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import  ItemList  from './Components/ItemList.jsx';



function App() {


  return (
    <div className="App">
      <NavBar/>
      <ItemList titulo="Bienvenidos!!!"/>
    </div>
  );
}

export default App;
