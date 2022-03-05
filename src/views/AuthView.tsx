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

function AuthView({
  themeIndex,
  themeFontStyle,
  themeBgStyle,
  _handleAnimation,
  _handleKaKaoOauth,
}) {
  return (
    <Animated.View style={[styles.safeConatiner, themeBgStyle]}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          style={styles.homeLogo}
          source={{
            uri: 'https://www.pcgamesn.com/wp-content/uploads/2021/03/league-of-legends-group.jpg',
          }}
        />
        <View style={{marginTop: 24}}>
          <Animated.Text style={styles.bigText}>
            티어 올리는 지름길 위캔듀오
          </Animated.Text>
        </View>
        <TouchableOpacity
          onPress={_handleKaKaoOauth}
          style={styles.kakaoBtn}
          activeOpacity={0.7}>
          <Text style={styles.boldCenterText}>카카오로 시작하기</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

export default AuthView;
