import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App" style={{backgroundColor:'whitesmoke'}}>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:idCategory' element={ <ItemListContainer />} />
            <Route exact path='/detail/:idProduct' element={<ItemDetailContainer />} /> 
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </div>    
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
