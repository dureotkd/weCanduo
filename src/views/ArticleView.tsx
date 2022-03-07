import React from 'react';
import {Animated, SafeAreaView} from 'react-native';
import {styles} from '../assets';
import {Container, DefaultText} from '../assets/theme';

function ArticleView({loading}) {
  return (
    <Container style={[styles.safeConatiner]}>
      <SafeAreaView>
        <DefaultText style={[]}>ArticleView</DefaultText>
      </SafeAreaView>
    </Container>
  );
}

export default ArticleView;
