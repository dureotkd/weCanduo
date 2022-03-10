import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, DefaultText} from '../assets/theme';

function Loading() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <ActivityIndicator />
    </Container>
  );
}

export default Loading;
