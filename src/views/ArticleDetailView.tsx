import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, DefaultText} from '../assets/theme';
function ArticleDetailView({navigation}) {
  return (
    <Container>
      <DefaultText>asddas</DefaultText>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <DefaultText>sdfsdf</DefaultText>
      </TouchableOpacity>
    </Container>
  );
}

export default ArticleDetailView;
