import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Article, ArticleWrite} from '../controllers';

const Stack = createNativeStackNavigator();

function ArticleStack({navigation}) {
  useLayoutEffect(() => {
    const state = navigation.getState().routes[1].state.index ? false : true;
    navigation.setOptions({
      headerShown: state,
    });
  }, [navigation.getState()]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ArticleList" component={Article} />
      <Stack.Screen name="ArticleWrite" component={ArticleWrite} />
    </Stack.Navigator>
  );
}

export default ArticleStack;
