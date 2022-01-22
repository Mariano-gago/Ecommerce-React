
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/Productos/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
