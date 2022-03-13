import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Container, DefaultText} from '../assets/theme';
import Reply from '../components/Reply';

function ArticleDetailView({navigation}) {
  return (
    <Container>
      <View>
        <DefaultText>Article Details</DefaultText>
        <Reply />
      </View>
    </Container>
  );
}

export default ArticleDetailView;
