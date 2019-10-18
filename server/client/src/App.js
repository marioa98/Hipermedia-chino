import React from 'react';
import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Chingue su madre el américa
        </h2>

        <p className="App-intro">
          We, al chile ya jala tu chingadera con proxy, server y todo el pedo
        </p>

        <a href="/auth/google">
            Inicia con gugul.
        </a>
      </header>
    </div>
  );
}

export default App;
