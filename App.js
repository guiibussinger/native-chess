import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Board from './src/components/Board';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView />
      <StyledView>
        <Board></Board>
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
