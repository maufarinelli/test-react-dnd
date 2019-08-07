import React from "react";
import "./App.css";
import Board from "./components/Board";
import { observe } from "./services/Game";

function App() {
  let position;
  setInterval(() => (position = observe()));

  return <Board knightPosition={position} />;
}

export default App;
