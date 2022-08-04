import React from 'react';
import './App.css';
import Peliculas from './components/Peliculas';
import Personajes from './components/Personajes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
        <Peliculas/>
        <Personajes/>
        </main>        
      </header>
    </div>
  );
}

export default App;
