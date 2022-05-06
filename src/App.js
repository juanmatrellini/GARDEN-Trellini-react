import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './pages/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';

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
      </Routes>
      
    
    </body>

  );
}

export default App;