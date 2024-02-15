import React from 'react';
import styled from 'styled-components';

const PieceImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Piece = ({ type, color }) => {
    // Determine the SVG file path based on piece type and color
    const pieceImagePath = `/pieces/${color}_${type}.svg`;
  
    return (
      <div style={{ width: '50px', height: '50px' }}>
        {/* Embed the SVG directly */}
        <svg width="100%" height="100%" viewBox="0 0 50 50">
        </svg>
      </div>
    );
  };
  
  return <PieceImage src={imagePath} alt={`${color} ${type}`} />;

export default Piece;
