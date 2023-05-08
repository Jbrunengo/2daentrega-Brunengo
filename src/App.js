import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CardWidget from './components/CardWidget/CardWidget';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className='fondo'>

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <CardWidget/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='*' element={<h1> Ah Ah Ah, no dijiste la palabra clave</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
