import React from 'react';
import {Pressable, Keyboard, View, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {ContainerPressable} from '../assets/theme';
const DismissKeyboardView = ({children, ...props}) => (
  <Pressable onPress={Keyboard.dismiss}>
    <KeyboardAwareScrollView
      {...props}
      style={props.style}
      enableOnAndroid={true}>
      {children}
    </KeyboardAwareScrollView>
  </Pressable>
);

export default DismissKeyboardView;
