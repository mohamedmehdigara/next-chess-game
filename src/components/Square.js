import React from 'react';
import styled from 'styled-components';

const SquareStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => (color ? '#eee' : '#aaa')};
`;

const Square = ({ color }) => {
  return <SquareStyled color={color} />;
};

export default Square;
