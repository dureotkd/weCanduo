import React from 'react';
import ArticleDetailView from '../views/ArticleDetailView';

function ArticleDetail({route, navigation}) {
  const {id} = route.params;

  console.log('방법ㄴ호', id);

  return <ArticleDetailView navigation={navigation} />;
}

export default ArticleDetail;
