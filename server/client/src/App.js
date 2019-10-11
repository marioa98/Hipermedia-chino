import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Chingue su madre el américa
        </h2>
      </header>

      <p className="App-intro">
        To get started, edit <code>src/App.js</code> y ya no se...
      </p>

      <a href="http://localhost:4000/auth/google">
          Inicia con gugul.
      </a>

    </div>
  );
}

export default App;
