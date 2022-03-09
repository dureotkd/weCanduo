import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../assets';
import {Container, DefaultText} from '../assets/theme';
import DismissKeyboard from '../components/DismissKeyboard';
function JoinView({
  _handleSummoner,
  disabledBtn,
  setSummonerText,
  navigation,
  loading,
  inputRef,
}) {
  return (
    <Container>
      <DismissKeyboard style={{height: '100%', padding: 26}}>
        <DefaultText style={{fontSize: 18}}>
          소환사명을 입력해주세요
        </DefaultText>
        <TextInput
          onChangeText={text => setSummonerText(text)}
          style={styles.textInput}
          ref={inputRef}
          placeholder="소환사명 입력"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={loading || disabledBtn}
          style={[disabledBtn ? styles.disabledBtn : styles.confirmBtn]}
          onPress={_handleSummoner}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={[styles.defaultText]}>입력</Text>
          )}
        </TouchableOpacity>
      </DismissKeyboard>
    </Container>
  );
}

export default JoinView;
