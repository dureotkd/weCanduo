import React, {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axiosController from '../api/axiosController';
import {searchPositionDefault} from '../assets/defaut';
import Loading from '../components/Loading';
import {ArticleWriteView} from '../views';

function ArticleWrite({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [myPosition, setMyPosition] = useState('');
  const [searchPosition, setSearchPosition] = useState('');

  const _handleTitle = text => {
    setTitle(text);
  };

  const _handleBody = useCallback(text => {
    setBody(text);
  }, []);

  const _handleMyPosition = useCallback(position => {
    setMyPosition(position);
  }, []);

  const _handleSearchPosition = useCallback(position => {
    setSearchPosition(position);
  }, []);

  const _writeArticle = useCallback(async () => {
    try {
      await axiosController({
        url: '/article',
        method: 'post',
        data: {
          body,
          title,
          myPosition,
          searchPosition,
        },
      });
    } catch (err) {
      console.log('writeArticle', e);
    }
  }, [body, title, myPosition, searchPosition]);

  // Theme ==================

  useEffect(() => {}, []);

  return (
    <ArticleWriteView
      loading={loading}
      navigation={navigation}
      searchPositionDefault={searchPositionDefault}
      _writeArticle={_writeArticle}
      _handleTitle={_handleTitle}
      _handleBody={_handleBody}
      _handleMyPosition={_handleMyPosition}
      _handleSearchPosition={_handleSearchPosition}
    />
  );
}

export default ArticleWrite;
