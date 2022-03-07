import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Container, DefaultText} from '../assets/theme';

function MainView({loading, summoner}) {
  return (
    <Container>
      <ScrollView style={{padding: 8}}>
        <DefaultText>안녕하세요</DefaultText>
      </ScrollView>
    </Container>
  );
}

export default MainView;
