import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import Square from './Square';

const boardWidth = Dimensions.get('window').width * 0.95;

const rows = 'abcdefgh'.split('');

const Board = () => {
  return (
    <StyledBoard>
      {rows.map((row, rowI) =>
        [...Array(8).keys()].map(key => (
          <Square bgColor={(key + (rowI % 2)) % 2 === 0 ? 'white' : 'black'} />
        ))
      )}
    </StyledBoard>
  );
};

const StyledBoard = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: ${boardWidth}px;
  height: ${boardWidth}px;
  background-color: black;
`;

export default Board;
