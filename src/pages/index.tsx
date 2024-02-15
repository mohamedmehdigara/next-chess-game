import React from 'react';
import styled from 'styled-components';
import Chessboard from '../components/Chessboard';
import Piece from '../components/Piece';
import BoardRow from '../components/BoardRow';
import CapturedPieces from '../components/CapturedPieces';
import GameStatus from '../components/GameStatus';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  // Dummy data for captured pieces
  const capturedPieces = [
    { type: 'rook', color: 'white' },
    { type: 'bishop', color: 'black' },
    // Add more captured pieces if needed
  ];

  // Dummy data for game status
  const currentPlayer = 'White';
  const isGameOver = false;

  return (
    <Container>
      <h1>Chess Game</h1>
      <Chessboard />
      <div>
        {/* Render captured pieces */}
        <CapturedPieces pieces={capturedPieces} />
      </div>
      <div>
        {/* Render game status */}
        <GameStatus currentPlayer={currentPlayer} isGameOver={isGameOver} />
      </div>
    </Container>
  );
};

export default Home;
