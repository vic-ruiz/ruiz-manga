import logo from './logo.svg';
import './App.css';
import { MiNav } from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <MiNav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Victor Ruiz React.
        </p>
      </header>
    </div>
  );
}


export default App;
