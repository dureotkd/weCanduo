import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function TabBarIconComponent({focused, color, size, route}) {
  let iconName;
  if (route.name === 'Main') {
    iconName = focused ? 'compass' : 'compass-outline';
    color = focused ? '#b3863a' : '#757575';
  } else if (route.name === 'Article') {
    iconName = focused ? 'chat' : 'chat-outline';
    color = focused ? '#b3863a' : '#757575';
  } else {
    iconName = focused ? 'account' : 'account-outline';
    color = focused ? '#b3863a' : '#757575';
  }
  return <MaterialCommunityIcons size={size} color={color} name={iconName} />;
}

export default TabBarIconComponent;
