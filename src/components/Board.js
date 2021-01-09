import React, { useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import Square from './Square';

import BoardContext from '../contexts/BoardContext';

const boardWidth = Dimensions.get('window').width * 0.95;

const Board = () => {
  const { board, movePiece } = useContext(BoardContext);
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState('white');

  console.log({ selected, turn });

  const onPressSquare = (position, piece) => {
    if (!selected && !piece) return;
    if (!selected && piece && !piece.includes(turn)) return;
    if (!selected) return setSelected({ position, piece });
    if (selected && piece.includes(turn)) return;

    console.log(selected.position, position, selected.piece);
    movePiece(selected.position, position, selected.piece);
    setSelected(null);
    setTurn(t => (t === 'white' ? 'black' : 'white'));
  };
  return (
    <StyledBoard>
      {Object.values(board)
        .flat()
        .map(item => (
          <Square id={item.id} square={item} movePiece={onPressSquare} />
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
