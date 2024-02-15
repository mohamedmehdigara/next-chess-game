import React from 'react';
import Square from './Square';

const BoardRow = ({ row, rowIndex }) => {
  return (
    <div>
      {row.map((color, colIndex) => (
        <Square key={`${rowIndex}-${colIndex}`} color={color} />
      ))}
    </div>
  );
};

export default BoardRow;
