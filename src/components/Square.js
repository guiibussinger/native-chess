import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const squareWidth = (Dimensions.get('window').width * 0.95) / 8;

const Square = ({ bgColor }) => {
  return <StyledSquare bgColor={bgColor} />;
};

const StyledSquare = styled.View`
  width: ${squareWidth}px;
  height: ${squareWidth}px;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Square;
