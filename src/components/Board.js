import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import Square from './Square';

import BoardContext from '../contexts/BoardContext';

const boardWidth = Dimensions.get('window').width * 0.95;

const Board = () => {
  const { board, movePiece } = useContext(BoardContext);
  return (
    <StyledBoard>
      {Object.values(board)
        .flat()
        .map(item => (
          <Square id={item.id} square={item} movePiece={movePiece} />
        ))}
    </StyledBoard>
  );
};

const StyledBoard = styled.View`
  flex-wrap: wrap;
  width: ${boardWidth}px;
  height: ${boardWidth}px;
  flex-direction: column-reverse;
`;

export default Board;
