import React from 'react';
import logo from './logo.svg';
import thisismydesign from './thisismydesign.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={thisismydesign} alt="thisismydesign" />
        <p>
          This is only the beginning.
        </p>
      
      </header>
    </div>
  );
}
// href example
{/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

export default App;
