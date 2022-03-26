import React from "react";
import Board from "./components/Board";
import "./styles/root.scss";

const app = () => {
  return (
    <div className="app">
      <h1>TicTacToe App!</h1>
      <Board />
    </div>
  );
};
export default app;
