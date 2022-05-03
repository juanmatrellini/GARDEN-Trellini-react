import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <body>
    <header>
    <NavBar/>
    </header>
    {/* <ItemListContainer/> */}
    <ItemDetailContainer/>
    </body>

  );
}

export default App;
