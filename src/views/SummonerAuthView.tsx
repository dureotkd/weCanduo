import React from 'react';
import {
  Animated,
  SafeAreaView,
  Switch,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {styles} from '../assets';

function SummonerAuthView({
  themeIndex,
  themeFontStyle,
  themeBgStyle,
  _handleAnimation,
  _goJoin,
  _handleKaKaoOauth,
}) {
  return (
    <Animated.View style={[styles.safeConatiner, themeBgStyle]}></Animated.View>
  );
}

export default SummonerAuthView;
