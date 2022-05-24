import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './pages/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <body>
      <header>
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      
    
    </body>

  );
}

export default App;