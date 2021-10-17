import React from 'react';
import logo from './logo.svg';
import './App.css';
import sayHello from 'react-html5-qrcode-reader';

function App() {
  const hello = sayHello({
    name: 'hello'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {hello}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
