import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const REACT_APP_GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
const REACT_APP_SPOTIFY = process.env.REACT_APP_SPOTIFY;

function App() {
  useEffect(() => {
    console.log('giphy client id');
    console.log(REACT_APP_GIPHY_KEY);
    console.log('spotify client id');
    console.log(REACT_APP_SPOTIFY);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
