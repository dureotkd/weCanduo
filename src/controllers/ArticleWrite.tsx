import React, {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
const ArticleWriteView = React.lazy(() => import('../views/ArticleWriteView'));

function ArticleWrite({navigation}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Theme ==================

  useEffect(() => {}, []);

  return (
    <Suspense fallback={<Loading />}>
      <ArticleWriteView loading={loading} navigation={navigation} />
    </Suspense>
  );
}

export default ArticleWrite;
