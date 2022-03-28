import React from "react";

const message = (winner, current) => {
  // const message = winner
  // ? `winner is ${winner}`
  // : `next player is ${current.isXNext ? "X" : "O"}`;
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner && `next player is ${current.isXNext ? "X" : "O"}`}
    </h2>
  );
};

export default message;
