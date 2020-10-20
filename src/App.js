import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer title="Hola! Te damos la bienvenida" />
    </div>
  );
}

export default App;
