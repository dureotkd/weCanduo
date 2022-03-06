import React from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles, theme} from '../assets';

function JoinView({
  themeIndex,
  themeFontStyle,
  themeBgStyle,
  _handleAnimation,
  _handleSummoner,
  disabledBtn,
  setSummonerText,
  navigation,
}) {
  return (
    <Animated.View style={[styles.centrConatiner, themeBgStyle]}>
      <View style={{width: '80%'}}>
        <Animated.Text style={[themeFontStyle, {fontSize: 18}]}>
          소환사명을 입력해주세요
        </Animated.Text>
        <TextInput
          onChangeText={text => setSummonerText(text)}
          style={styles.textInput}
          placeholder="소환사명 입력"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={disabledBtn}
          style={[disabledBtn ? styles.disabledBtn : styles.confirmBtn]}
          onPress={_handleSummoner}>
          <Text style={[styles.defaultText]}>입력</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

export default JoinView;
