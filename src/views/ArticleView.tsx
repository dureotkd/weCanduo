import React from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../assets';
import {empty} from '../assets/defaut';
import {
  Container,
  DefaultText,
  Wrapper,
  CreateArticleButton,
} from '../assets/theme';

function ArticleView({navigation, loading, articles}) {
  const ArticleListItem = props => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('ArticleDetail', {id: props.item.id})
        }
        style={styles.articleList}>
        <View>
          <DefaultText style={{fontSize: 15, fontWeight: 'bold'}}>
            {props.item.title}
          </DefaultText>
        </View>
        <View style={{marginTop: 6}}>
          <DefaultText style={{fontSize: 12}}>{props.item.body}</DefaultText>
        </View>
      </Pressable>
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
          {!empty(articles) ? (
            <View style={{width: '100%', marginTop: 20}}>
              <FlatList
                data={articles}
                keyExtractor={item => item.id}
                renderItem={ArticleListItem}
              />
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}>
              <DefaultText style={{fontSize: 18}}>
                게시글이 없습니다
              </DefaultText>
            </View>
          )}
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
