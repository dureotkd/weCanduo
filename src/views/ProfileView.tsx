import React from 'react';
import {Animated, SafeAreaView} from 'react-native';
import {styles} from '../assets';

function ProfileView({
  themeIndex,
  themeFontStyle,
  themeBgStyle,
  _handleAnimation,
  loading,
}) {
  return (
    <Animated.View style={[styles.safeConatiner, themeBgStyle]}>
      <SafeAreaView>
        <Animated.Text style={[themeFontStyle]}>ProfileView</Animated.Text>
      </SafeAreaView>
    </Animated.View>
  );
}

export default ProfileView;
