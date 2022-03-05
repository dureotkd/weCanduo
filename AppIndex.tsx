import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth, Join, SummonerAuth} from './src/controllers';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function AppIndex() {
  const themeIndex = useSelector(state => state.theme.flag);

  return (
    <NavigationContainer>
      <StatusBar barStyle={themeIndex ? 'dark-content' : 'light-content'} />
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Join" component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppIndex;
