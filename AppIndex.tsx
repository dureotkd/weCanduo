import React, {useCallback, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from './src/slices';
import AsyncStorage from '@react-native-community/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import axiosController from './src/api/axiosController';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Auth, Join, Main, Article} from './src/controllers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppIndex() {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const accessToken = useSelector(state => state.user.accessToken);

  const getAuthToken = useCallback(async () => {
    switch (accessToken) {
      default:
        break;

      case undefined:
        const storageAccessToken = await EncryptedStorage.getItem(
          'accessToken',
        );

        if (storageAccessToken) {
          const data = await axiosController({
            method: 'get',
            url: '/users',
            params: {
              accessToken,
            },
          });
          dispatch(userSlice.actions.setUser({data}));
        }

        break;
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    getAuthToken();
  }, [getAuthToken]);

  return (
    <NavigationContainer>
      <StatusBar barStyle={themeIndex ? 'dark-content' : 'light-content'} />
      {accessToken ? (
        <Tab.Navigator>
          <Tab.Screen name="'Main" component={Main} />
          <Tab.Screen name="Article" component={Article} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Join" component={Join} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppIndex;
