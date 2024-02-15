import React, { useState } from 'react';
import styled from 'styled-components';
import Piece from './Piece';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
`;

const Square = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => (color ? '#eee' : '#aaa')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chessboard = () => {
  // Dummy data for initial chessboard setup
  const initialBoard = [
    ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'],
    ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
    ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'],
  ];

  // State to store the chessboard state
  const [board, setBoard] = useState(initialBoard);

  // Function to render a square with a piece
  const renderSquare = (piece, row, col) => {
    return (
      <Square key={`${row}-${col}`} color={(row + col) % 2 === 0}>
        {piece && <Piece type={piece} color={(row + col) % 2 === 0 ? 'black' : 'white'} />}
      </Square>
    );
  };

  // Function to render the chessboard
  const renderChessboard = () => {
    return board.map((row, rowIndex) => (
      <div key={`row-${rowIndex}`}>
        {row.map((piece, colIndex) => renderSquare(piece, rowIndex, colIndex))}
      </div>
    ));
  };

  return <Board>{renderChessboard()}</Board>;
};

export default Chessboard;
