import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, DefaultText, Wrapper} from '../assets/theme';

function ArticleWriteView({navigation, loading}) {
  return (
    <Container>
      <Wrapper>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <DefaultText>WriteView</DefaultText>
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
}

export default ArticleWriteView;
