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
  ActivityIndicator,
} from 'react-native';
import {styles} from '../assets';
import {Container, DefaultText} from '../assets/theme';

function AuthView({_handleKaKaoOauth, loading}) {
  return (
    <Container style={[styles.safeConatiner]}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          style={styles.homeLogo}
          source={{
            uri: 'https://www.pcgamesn.com/wp-content/uploads/2021/03/league-of-legends-group.jpg',
          }}
        />
        <View style={{marginTop: 24}}>
          <DefaultText style={styles.bigText}>
            티어 올리는 지름길 위캔듀오
          </DefaultText>
        </View>
        <TouchableOpacity
          onPress={_handleKaKaoOauth}
          style={styles.kakaoBtn}
          disabled={loading}
          activeOpacity={1}>
          {loading ? (
            <ActivityIndicator color="black" />
          ) : (
            <View style={styles.spaceRow}>
              <Image
                style={styles.kakaoImg}
                source={{uri: 'https://imki123.github.io/images/kakao.png'}}
              />
              <Text style={styles.boldCenterText}>카카오로 시작하기</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default AuthView;
