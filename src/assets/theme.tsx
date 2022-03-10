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
  width: 120px;
  height: 59px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
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

export {
  theme,
  Container,
  DefaultText,
  ContainerPressable,
  DefaultLabel,
  Wrapper,
  CreateArticleButton,
  DefaultTextInput,
};
