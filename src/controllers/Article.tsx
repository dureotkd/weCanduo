import React, {useState} from 'react';
import {ArticleView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';

function Article({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const [loading, setLoading] = useState(false);

  // Theme ==================

  return <ArticleView loading={loading} />;
}

export default Article;
