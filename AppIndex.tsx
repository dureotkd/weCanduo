import React, {useCallback, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from './src/slices';
import AsyncStorage from '@react-native-community/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import axiosController from './src/api/axiosController';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Auth, Join, Main, Article, Profile} from './src/controllers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppIndex() {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const accessToken = useSelector(state => state.user.accessToken);

  const getAuthToken = useCallback(async () => {
    if (!accessToken) {
      const storageAccessToken = await EncryptedStorage.getItem('accessToken');

      if (storageAccessToken) {
        const {status, data} = await axiosController({
          method: 'get',
          url: '/users',
          params: {
            accessToken: storageAccessToken,
          },
        });

        dispatch(userSlice.actions.setUser({data: data.user}));
      }
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    getAuthToken();
  }, [getAuthToken]);

  return (
    <NavigationContainer>
      <StatusBar barStyle={themeIndex ? 'dark-content' : 'light-content'} />
      {accessToken ? (
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              borderTopWidth: 0,
              height: 60,
              backgroundColor: '#000000',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: '#000000',
              height: 80,
            },
            headerLeft: () => {
              return <Text style={{color: 'white'}}>asdads</Text>;
            },
            headerRight: () => {
              return (
                <MaterialCommunityIcons name="bell" style={{color: 'white'}}>
                  asdads
                </MaterialCommunityIcons>
              );
            },
          }}>
          <Tab.Screen name="'Main" component={Main} />
          <Tab.Screen name="Article" component={Article} />
          <Stack.Screen name="Profile" component={Profile} />
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
