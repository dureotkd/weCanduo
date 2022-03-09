import React from 'react';
import {Image, View} from 'react-native';
import {DefaultText} from '../assets/theme';
function PositionItem({position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 30, height: 30}}
        source={{
          uri: `https://raw.githubusercontent.com/davidherasp/lol_images/master/role_lane_icons/${position}.png`,
        }}
      />
      <View style={{marginLeft: 6}}>
        <DefaultText>{position}</DefaultText>
      </View>
    </View>
  );
}

function PositionComponent({item}) {
  return (
    <View>
      {
        {
          TOP: <PositionItem position={item} />,
          JUNGLE: <PositionItem position={item} />,
          MIDDLE: <PositionItem position={item} />,
          ADC: <PositionItem position={item} />,
          SUPPORT: <PositionItem position={item} />,
        }[item]
      }
    </View>
  );
}

export default PositionComponent;
