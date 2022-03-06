import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Animated, View, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from './src/slices';
import EncryptedStorage from 'react-native-encrypted-storage';
import axiosController from './src/api/axiosController';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Auth, Join, Main, Article, Profile} from './src/controllers';
import {styles} from './src/assets';
import getTheme from './src/animations/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBarIconComponent({focused, color, size, route}) {
  let iconName;
  if (route.name === 'Main') {
    iconName = focused ? 'compass' : 'compass-outline';
    color = focused ? '#e8c488' : '#757575';
  } else if (route.name === 'Article') {
    iconName = focused ? 'chat' : 'chat-outline';
    color = focused ? '#e8c488' : '#757575';
  } else {
    iconName = focused ? 'account' : 'account-outline';
    color = focused ? '#e8c488' : '#757575';
  }
  return <MaterialCommunityIcons size={size} color={color} name={iconName} />;
}

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
      {!accessToken ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarStyle: {
              borderTopWidth: 0,
              height: 60,
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: themeIndex ? 'white' : 'black',
            },
            tabBarIcon: ({focused, color, size}) => {
              return (
                <TabBarIconComponent
                  route={route}
                  focused={focused}
                  color={color}
                  size={size}
                />
              );
            },
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: themeIndex ? 'white' : 'black',
            },
            headerLeft: () => {
              return (
                <View style={[styles.rowCenter]}>
                  <View style={{marginLeft: 6}}>
                    <View>
                      <Animated.Text
                        style={[
                          {
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: themeIndex ? 'black' : 'white',
                          },
                        ]}>
                        dddfasf
                      </Animated.Text>
                    </View>
                    <View style={{marginTop: 3}}>
                      <Animated.Text
                        style={{color: themeIndex ? 'black' : 'white'}}>
                        asd
                      </Animated.Text>
                    </View>
                  </View>
                </View>
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bell"
                    size={23}
                    style={{color: 'white', marginRight: 15}}
                  />
                </TouchableOpacity>
              );
            },
          })}>
          <Tab.Screen name="Main" component={Main} />
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
