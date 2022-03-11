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

const Wrapper = styled.View`
  padding: 16px;
  flex: 1;
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

const DefaultLabel = styled.Text`
  color: #b4b1b1;
`;

const DefaultTextInput = styled.TextInput`
  color: white;
  width: 100%;
  height: 35px;
  padding-bottom: 6px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 4px;
  padding: 6px;
  flex-shrink: 1;
`;

const DefaultInputLabel = styled.Text`
  color: white;
`;

const CreateArticleButton = styled.TouchableOpacity`
  position: absolute;
  right: 30px;
  bottom: 40px;
  background-color: #b3863a;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => {
    return color;
  }};
  height: 40px;
  border-radius: 4px;
`;

export {
  theme,
  Container,
  DefaultText,
  ContainerPressable,
  Wrapper,
  CreateArticleButton,
  DefaultLabel,
  DefaultTextInput,
  DefaultInputLabel,
  DefaultButton,
};
