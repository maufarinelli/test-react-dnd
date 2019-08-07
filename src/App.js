import React from 'react';
import './App.css';
import Board from './components/Board';
import { observe } from './services/Game';

function App() {
  let position;
  observe(knightPosition => { position = knightPosition} );
  
  return(<Board knightPosition={position} />);
}

export default App;
