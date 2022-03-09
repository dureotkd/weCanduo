import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import axiosController from './src/api/axiosController';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Auth, Join, Main, Article, Profile} from './src/controllers';
import {styles} from './src/assets';
import {theme, DefaultText} from './src/assets/theme';
import {ThemeProvider} from 'styled-components';
import {userSlice, summonerSlice} from './src/slices';
import {empty} from './src/assets/defaut';
import TabBarIconComponent from './src/components/TabBarIcon';
import {AxiosError} from 'axios';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppIndex() {
  const dispatch = useDispatch();

  // 접근토큰
  const accessToken = useSelector(state => state.user.accessToken);

  // 소환사 정보
  const summoner = useSelector(state => state.summoner);

  // 레이아웃 테마 관련
  const themeIndex = useSelector(state => state.theme.flag);
  const resTheme = theme[themeIndex ? 'light' : 'dark'];

  let [searchSecond, setSearchSecond] = useState(1);
  let [searchSecondText, setSearchSecondText] = useState('00:00');
  let [searchInterval, setSearchInterval] = useState({});

  const getSearch = useCallback(() => {
    if (summoner.searchIng) {
      const interval = setInterval(() => {
        const timmerArr = searchSecondText.split(':');
        const nowDate = new Date(
          '2022',
          '07',
          '06',
          '1',
          timmerArr[0],
          timmerArr[1] + searchSecond,
        );

        let newMin = nowDate.getMinutes();
        let newSec = nowDate.getSeconds();

        if (newMin < 10) {
          newMin = `0${newMin}`;
        }

        if (newSec < 10) {
          newSec = `0${newSec}`;
        }

        setSearchSecond(searchSecond++);
        setSearchSecondText(`${newMin}:${newSec}`);
      }, 1000);
      setSearchInterval(interval);
    } else {
      clearInterval(searchInterval);
      setSearchInterval({});
      setSearchSecond(1);
      setSearchSecondText('00:00');
    }
  }, [summoner.searchIng]);

  useEffect(() => {
    getSearch();
  }, [getSearch]);

  const getAuthToken = useCallback(async () => {
    let resAccessToken = accessToken
      ? accessToken
      : await EncryptedStorage.getItem('accessToken');

    resAccessToken = '1g77BSovkIH2D4OYh3dNrQ6n-7zXRpAnc888Bgo9dNoAAAF_ZQoInA';

    if (resAccessToken) {
      try {
        const {status, data} = await axiosController({
          method: 'get',
          url: '/users',
          params: {
            accessToken: resAccessToken,
          },
        });

        if (!empty(data.user) && status === 200) {
          dispatch(summonerSlice.actions.setSummoner({data: data.user}));
          dispatch(userSlice.actions.setUser({data: data.user}));
        }
      } catch (e) {
        console.log(e as AxiosError);
        Alert.alert('알림', '서버 통신 오류!');
      }
    }
  }, [dispatch]);

  useEffect(() => {
    getAuthToken();
  }, [getAuthToken]);

  return (
    <ThemeProvider theme={resTheme}>
      <NavigationContainer>
        <StatusBar barStyle={themeIndex ? 'dark-content' : 'light-content'} />
        {accessToken ? (
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
                borderBottomWidth: 1,
                borderBottomColor: '#b3863a',
                elevation: 0,
                shadowOpacity: 0,
                height: Platform.OS === 'ios' ? 110 : 80,
                backgroundColor: themeIndex ? 'white' : 'black',
              },
              headerLeft: () => {
                return (
                  <View style={[styles.rowCenter]}>
                    <ImageBackground
                      style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={{
                        uri: `https://opgg-static.akamaized.net/images/borders2/${summoner.tier.toLowerCase()}.png`,
                      }}>
                      <Image
                        style={{
                          width: 40,
                          height: 40,
                        }}
                        source={{
                          uri: `https://z.fow.kr/profile/${summoner.profileIconId}.png`,
                        }}
                      />
                    </ImageBackground>
                    <View style={{marginLeft: 6}}>
                      <View>
                        <DefaultText
                          style={[
                            {
                              fontWeight: 'bold',
                              fontSize: 16,
                            },
                          ]}>
                          {summoner.name}
                        </DefaultText>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 3}}>
                        <DefaultText style={{marginRight: 6}}>
                          {summoner.tier}
                        </DefaultText>
                        <DefaultText>{summoner.rank}</DefaultText>
                        {summoner.searchIng ? (
                          <View style={{marginLeft: 8}}>
                            <DefaultText>{searchSecondText}</DefaultText>
                          </View>
                        ) : null}
                      </View>
                    </View>
                  </View>
                );
              },
              headerRight: () => {
                return (
                  <TouchableOpacity style={{padding: 10}}>
                    <MaterialCommunityIcons
                      name="bell"
                      size={23}
                      style={{
                        color: themeIndex ? 'black' : 'white',
                        marginRight: 15,
                      }}
                    />
                    <DefaultText>{summoner.searchIng}</DefaultText>
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
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              presentation: 'transparentModal',
              animationTypeForReplace: 'push',
            }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Join" component={Join} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default AppIndex;
