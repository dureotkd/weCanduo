import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {
  Container,
  DefaultText,
  Wrapper,
  DefaultTextInput,
} from '../assets/theme';

function ArticleWriteView({navigation, loading}) {
  return (
    <Container>
      <Wrapper>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={
              {
                // borderBottomWidth: 1,
                // borderBottomColor: '#fff',
                // paddingBottom: 8,
              }
            }>
            <DefaultText style={{fontWeight: 'bold', fontSize: 18}}>
              듀오 구해요
            </DefaultText>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={{
              fontSize: 18,
            }}>
            <DefaultText style={{fontWeight: 'bold', fontSize: 18}}>
              뒤로
            </DefaultText>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 12}}>
          <DefaultTextInput />
        </View>
      </Wrapper>
    </Container>
  );
}

export default ArticleWriteView;
