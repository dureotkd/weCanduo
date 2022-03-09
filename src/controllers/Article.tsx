import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {ArticleView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';
import {Alert} from 'react-native';

function Article({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {}, []);

  const getArticle = useCallback(() => {}, [dispatch]);
  useEffect(() => {
    getArticle();
  }, []);

  // Theme ==================

  return <ArticleView loading={loading} navigation={navigation} />;
}

export default Article;
