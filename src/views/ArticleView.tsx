import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../assets';
import {
  Container,
  DefaultText,
  Wrapper,
  CreateArticleButton,
} from '../assets/theme';

function ArticleListItem({index, item}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => console.log('?')}
      style={styles.articleList}>
      <DefaultText>{item.title}</DefaultText>
      <DefaultText>{item.body}</DefaultText>
    </TouchableOpacity>
  );
}

function ArticleView({loading}) {
  const data = [
    {id: 1, title: 'zzz', body: 'aaafsfs'},
    {id: 2, title: 'zzz', body: 'aaafsfs'},
    {id: 3, title: 'zzz', body: 'aaafsfs'},
    {id: 4, title: 'zzz', body: 'aaafsfs'},
  ];

  return (
    <Container>
      <Wrapper>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DefaultText style={{fontWeight: 'bold', fontSize: 16}}>
            전체 게시글
          </DefaultText>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={ArticleListItem}
          />
        </View>
        <CreateArticleButton activeOpacity={0.7}>
          <Text style={{color: 'white'}}>+</Text>
        </CreateArticleButton>
      </Wrapper>
    </Container>
  );
}

export default ArticleView;
