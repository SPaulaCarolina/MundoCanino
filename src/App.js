import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className="App" style={{backgroundColor:'whitesmoke'}}>
        <NavBar />
       {/* <ItemListContainer /> */}
        <ItemDetailContainer /> 
    </div>
  );
}

export default App;
