import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { MiNav } from './components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <MiNav/>
      <ItemListContainer/>
    </div>
  );
}


export default App;
