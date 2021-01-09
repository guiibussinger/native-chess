import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components';

import { getSquareImage } from '../help/pieces';

const squareWidth = (Dimensions.get('window').width * 0.95) / 8;

const Square = ({ square: { bgColor, piece, id }, movePiece }) => {
  return (
    <StyledSquare bgColor={bgColor} onPress={() => movePiece(id, 'a3', piece)}>
      {/* <Text style={{ color: 'red' }}>{id}</Text> */}
      {piece ? <StyledImage source={getSquareImage(piece)} /> : null}
    </StyledSquare>
  );
};

const StyledSquare = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${squareWidth}px;
  height: ${squareWidth}px;
  background-color: ${({ bgColor }) => bgColor};
`;

const StyledImage = styled.Image`
  resize-mode: contain;
`;

export default Square;
