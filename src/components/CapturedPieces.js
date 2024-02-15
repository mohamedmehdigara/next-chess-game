import React from 'react';
import Piece from './Piece';

const CapturedPieces = ({ pieces }) => {
  return (
    <div>
      {pieces.map((piece, index) => (
        <Piece key={index} type={piece.type} color={piece.color} />
      ))}
    </div>
  );
};

export default CapturedPieces;
