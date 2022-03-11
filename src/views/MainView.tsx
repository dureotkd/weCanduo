import React from 'react';
import {View} from 'react-native';
import {
  Container,
  DefaultText,
  Wrapper,
  DefaultLabel,
  DefaultButton,
} from '../assets/theme';
import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components';
import styles from '../assets/styles';
import PositionComponent from '../components/PositionItem';

function MainView({
  loading,
  summoner,
  setPreferPosition,
  _handleSearchGame,
  _cancelSearchGame,
  setMyPosition,
  searchPositionDefault,
}) {
  return (
    <Container>
      <Wrapper>
        <View style={{padding: 12, height: '88%'}}>
          <View>
            <DefaultText>빠르고 완벽한 자동매칭</DefaultText>
            <DefaultText>티어를 올리다</DefaultText>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <DefaultLabel>찾는 포지션</DefaultLabel>
              <SelectDropdown
                data={searchPositionDefault}
                disabled={loading}
                onSelect={(selectedItem, index) => {
                  setPreferPosition(selectedItem);
                }}
                renderCustomizedRowChild={item => (
                  <PositionComponent item={item} />
                )}
                renderCustomizedButtonChild={item => (
                  <PositionComponent item={item} />
                )}
                buttonStyle={styles.defaultSelect}
                dropdownStyle={{
                  backgroundColor: '#484848',
                }}
              />
            </View>
            <View>
              <DefaultLabel>나의 포지션</DefaultLabel>
              <SelectDropdown
                data={searchPositionDefault}
                disabled={loading}
                onSelect={(selectedItem, index) => {
                  setMyPosition(selectedItem);
                }}
                renderCustomizedRowChild={item => (
                  <PositionComponent item={item} />
                )}
                renderCustomizedButtonChild={item => (
                  <PositionComponent item={item} />
                )}
                buttonStyle={styles.defaultSelect}
                dropdownStyle={{
                  backgroundColor: '#484848',
                }}
              />
            </View>
          </View>
        </View>
        {!loading ? (
          <DefaultButton
            color="#101747"
            onPress={_handleSearchGame}
            activeOpacity={0.7}>
            <DefaultText>듀오 자동서치</DefaultText>
          </DefaultButton>
        ) : (
          <DefaultButton
            color="#802f2f"
            onPress={_cancelSearchGame}
            activeOpacity={0.7}>
            <DefaultText>취소</DefaultText>
          </DefaultButton>
        )}
      </Wrapper>
    </Container>
  );
}

export default MainView;
