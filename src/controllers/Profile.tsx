import React, {useState} from 'react';
import {ProfileView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice, themeSlice} from '../slices';
import axiosController from '../api/axiosController';
import getTheme from '../animations/theme';

function Profile({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);
  const [loading, setLoading] = useState(false);

  // Theme ==================

  return (
    <ProfileView
      themeIndex={themeIndex}
      themeBgStyle={themeBgStyle}
      themeFontStyle={themeFontStyle}
      _handleAnimation={_handleAnimation}
      loading={loading}
    />
  );
}

export default Profile;
