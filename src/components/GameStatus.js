import React from 'react';

const GameStatus = ({ currentPlayer, isGameOver }) => {
  return (
    <div>
      {isGameOver ? (
        <p>Game Over</p>
      ) : (
        <p>{currentPlayer}'s turn</p>
      )}
    </div>
  );
};

export default GameStatus;
