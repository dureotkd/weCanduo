import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {ArticleView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';
import {Alert} from 'react-native';
import {searchPositionDefault} from '../assets/defaut';
import {useFocusEffect} from '@react-navigation/native';

function Article({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const getArticle = useCallback(async () => {
    const {data} = await axiosController({
      url: `/articles`,
      method: 'get',
    });
    setArticles(data.articles);
  }, []);

  useFocusEffect(() => {
    getArticle();
  });

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
