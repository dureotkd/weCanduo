import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {ArticleWriteView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';
import {Alert} from 'react-native';

function ArticleWrite({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const [loading, setLoading] = useState(false);

  // Theme ==================

  return <ArticleWriteView loading={loading} navigation={navigation} />;
}

export default ArticleWrite;
