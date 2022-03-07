import React from 'react';
import {Animated, Switch, SafeAreaView} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => {
    return theme.bgColor;
  }};
`;

const DefaultText = styled.Text`
  color: ${({theme}) => {
    return theme.color;
  }};
`;

function ProfileView({loading}) {
  return (
    <Container>
      <SafeAreaView>
        <DefaultText>ProfileView</DefaultText>
        <DefaultText>ProfileView</DefaultText>
        <DefaultText>ProfileView</DefaultText>
        <DefaultText>ProfileView</DefaultText>
      </SafeAreaView>
    </Container>
  );
}

export default ProfileView;
