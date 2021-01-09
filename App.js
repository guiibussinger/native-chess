import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import BoardContext, { useBoardContext } from './src/contexts/BoardContext';

import Board from './src/components/Board';

const App = () => {
  const { board, movePiece } = useBoardContext();
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView />
      <StyledView>
        <BoardContext.Provider value={{ board, movePiece }}>
          <Board />
        </BoardContext.Provider>
      </StyledView>
    </>
  );
};

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

export default App;
