import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Article, ArticleWrite} from '../controllers';
import ArticleDetail from './ArticleDetail';
import {styles} from '../assets';

const Stack = createNativeStackNavigator();

function ArticleStack({navigation}) {
  useLayoutEffect(() => {
    const state = navigation.getState().routes[1].state?.index ? false : true;
    navigation.setOptions({
      headerShown: state,
      tabBarStyle: {
        backgroundColor: 'black',
        display: state ? 'flex' : 'none',
        ...styles.tabBartStyle,
      },
    });
  }, [navigation.getState()]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="ArticleList" component={Article} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="ArticleWrite" component={ArticleWrite} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default ArticleStack;
