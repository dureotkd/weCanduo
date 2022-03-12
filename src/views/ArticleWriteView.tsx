import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Container,
  DefaultText,
  Wrapper,
  DefaultTextInput,
  DefaultInputLabel,
  DefaultButton,
} from '../assets/theme';
import PositionComponent from '../components/PositionItem';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from '../assets';
import DismissKeyboard from '../components/DismissKeyboard';

function ArticleWriteView({
  navigation,
  loading,
  searchPositionDefault,
  _writeArticle,
  _handleTitle,
  _handleBody,
  _handleMyPosition,
  _handleSearchPosition,
}) {
  return (
    <Container>
      <DismissKeyboard style={{height: '100%', padding: 8}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 0.1,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{}}>
            <DefaultText style={{fontWeight: 'bold', fontSize: 18}}>
              뒤로
            </DefaultText>
          </TouchableOpacity>
          <View>
            <DefaultText style={{fontWeight: 'bold', fontSize: 18}}>
              듀오 구해요
            </DefaultText>
          </View>
        </View>
        <View style={{marginTop: 24}}>
          <View>
            <View>
              <DefaultInputLabel>제목</DefaultInputLabel>
              <DefaultTextInput
                onChangeText={_handleTitle}
                style={{marginTop: 12}}
              />
            </View>
            <View style={{marginTop: 24}}>
              <DefaultInputLabel>내용</DefaultInputLabel>
              <DefaultTextInput
                onChangeText={_handleBody}
                style={{marginTop: 12, height: 180}}
                multiline={true}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 24,
            }}>
            <View>
              <DefaultInputLabel>찾는 포지션</DefaultInputLabel>
              <SelectDropdown
                data={searchPositionDefault}
                onSelect={_handleSearchPosition}
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
              <DefaultInputLabel>나의 포지션</DefaultInputLabel>
              <SelectDropdown
                data={searchPositionDefault}
                disabled={loading}
                onSelect={_handleMyPosition}
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
      </DismissKeyboard>
      <DefaultButton
        activeOpacity={1}
        onPress={_writeArticle}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#101747',
        }}>
        <DefaultText>작성</DefaultText>
      </DefaultButton>
    </Container>
  );
}

export default ArticleWriteView;
