import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import logo from './components/Assets/logo.png'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='fondo'>
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/itemid' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1> Ah Ah Ah, no dijiste la palabra clave</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
