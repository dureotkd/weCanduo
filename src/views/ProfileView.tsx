import React from 'react';
import {Animated, Switch, SafeAreaView} from 'react-native';
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
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={themeIndex ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={_handleAnimation}
          value={themeIndex === 0}
        />
      </SafeAreaView>
    </Animated.View>
  );
}

export default ProfileView;
