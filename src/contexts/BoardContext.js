import { createContext, useState, useCallback } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import { initialPosition } from '../help/pieces';

const rows = 'abcdefgh'.split('');

const BoardContext = createContext(null);

export const useBoardContext = () => {
  const [board, setBoard] = useState(
    rows.reduce(
      (acc, cur, index) => ({
        ...acc,
        [cur]: [...Array(8).keys()].map(key => {
          const name = `${cur}${key + 1}`;
          return {
            bgColor: (key + (index % 2)) % 2 === 0 ? '#b3e5fc' : '#0288d1',
            piece: initialPosition[name] || '',
            id: name
          };
        })
      }),
      {}
    )
  );

  const getSquare = useCallback(
    id => board[id.charAt(0)][parseInt(id.charAt(1), 10) - 1],
    [board]
  );

  const movePiece = (from, to, piece) => {
    const fromRow = from.charAt(0);
    const fromColumn = parseInt(from.charAt(1), 10) - 1;
    const toRow = to.charAt(0);
    const toColumn = parseInt(to.charAt(1), 10) - 1;

    setBoard(oldBoard => {
      const auxBoard = cloneDeep(oldBoard);
      auxBoard[fromRow][fromColumn].piece = '';
      auxBoard[toRow][toColumn].piece = piece;
      console.log(auxBoard);
      return auxBoard;
    });
  };

  return { board, getSquare, movePiece };
};

export default BoardContext;
