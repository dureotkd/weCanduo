import styled from 'styled-components';

const theme = {
  // light
  light: {
    bgColor: '#ffffff',
    color: '#000000',
  },
  // dark
  dark: {
    bgColor: 'black',
    color: '#ffffff',
  },
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => {
    return theme.bgColor;
  }};
`;

const ContainerPressable = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const DefaultText = styled.Text`
  color: ${({theme}) => {
    return theme.color;
  }};
`;

export {theme, Container, DefaultText, ContainerPressable};
