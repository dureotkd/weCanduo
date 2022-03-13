import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {ArticleView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';
import {Alert} from 'react-native';
import {searchPositionDefault} from '../assets/defaut';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

function Article({navigation}) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const getArticle = async () => {
    const {data} = await axiosController({
      url: `/articles`,
      method: 'get',
    });
    setArticles(data.articles);
  };

  useEffect(() => {
    if (!isFocused) return;

    getArticle();
  }, [isFocused]);

  // Theme ==================
  return (
    <ArticleView
      loading={loading}
      navigation={navigation}
      articles={articles}
    />
  );
}

export default Article;
