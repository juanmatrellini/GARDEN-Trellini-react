import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <body>
    <header>
    <NavBar/>
    </header>
    <ItemListContainer greeting="BIENVENIDOS"/>
    </body>

  );
}

export default App;
