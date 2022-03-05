import React from 'react';
import {Animated} from 'react-native';
import {styles} from '../assets';

function MainView({
  themeIndex,
  themeFontStyle,
  themeBgStyle,
  _handleAnimation,
  loading,
}) {
  return (
    <Animated.View style={[styles.safeConatiner, themeBgStyle]}>
      <Animated.Text style={[themeFontStyle]}>MainView</Animated.Text>
    </Animated.View>
  );
}

export default MainView;
