import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2> Binary to Decimal Converse</h2>
        </p>        
      </header>      
    </div>
  );
}

export default App;
