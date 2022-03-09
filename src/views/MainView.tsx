import React from 'react';
import {View} from 'react-native';
import {Container, DefaultText, Wrapper, DefaultLabel} from '../assets/theme';
import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components';
import styles from '../assets/styles';
import PositionComponent from '../components/PositionItem';

const SearchContainer = styled.View`
  padding: 12px;
  height: 88%;
`;

const SearchButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  background-color: ${({color}) => {
    return color;
  }};
  height: 40px;
  border-radius: 4px;
`;

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
        <SearchContainer>
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
        </SearchContainer>
        {!loading ? (
          <SearchButton
            color="#101747"
            onPress={_handleSearchGame}
            activeOpacity={0.7}>
            <DefaultText>듀오 자동서치</DefaultText>
          </SearchButton>
        ) : (
          <SearchButton
            color="#802f2f"
            onPress={_cancelSearchGame}
            activeOpacity={0.7}>
            <DefaultText>취소</DefaultText>
          </SearchButton>
        )}
      </Wrapper>
    </Container>
  );
}

export default MainView;
