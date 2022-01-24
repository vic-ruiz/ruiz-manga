import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { MiNav } from './components/Navbar/Navbar'
import {ItemList } from './ItemList/ItemList'


function App() {
  return (
    <div className="App">
      <MiNav/>
      <ItemListContainer/>
      <ItemList/>
    </div>
  );
}


export default App;
