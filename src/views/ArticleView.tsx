import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../assets';
import {
  Container,
  DefaultText,
  Wrapper,
  CreateArticleButton,
} from '../assets/theme';

function ArticleView({navigation, loading}) {
  const data = [
    {id: 1, title: '안녕하세요', body: 'aaafsfs'},
    {id: 2, title: 'ㅋㅋㅋㅋㅋ', body: 'aaafsfs'},
    {id: 3, title: '골드양학구합니다', body: 'aaafsfs'},
    {id: 4, title: 'zzz', body: 'aaafsfs'},
  ];

  const ArticleListItem = props => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('ArticleDetail', {id: props.item.id})
        }
        style={styles.articleList}>
        <View>
          <DefaultText style={{fontSize: 14}}>{props.item.title}</DefaultText>
        </View>
        <View style={{marginTop: 6}}>
          <DefaultText style={{fontSize: 12}}>{props.item.body}</DefaultText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Wrapper>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 12,
          }}>
          <DefaultText style={{fontWeight: 'bold', fontSize: 16}}>
            전체 게시글
          </DefaultText>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            setNativeProps={{navigation}}
            data={data}
            keyExtractor={item => item.id}
            renderItem={ArticleListItem}
          />
        </View>
        <CreateArticleButton
          onPress={() => navigation.navigate('ArticleWrite')}
          activeOpacity={0.7}>
          <Text style={{color: 'white'}}>+</Text>
        </CreateArticleButton>
      </Wrapper>
    </Container>
  );
}

export default ArticleView;
