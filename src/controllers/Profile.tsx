import React, {useState} from 'react';
import {ProfileView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice, themeSlice} from '../slices';
import axiosController from '../api/axiosController';
import getTheme from '../animations/theme';

function Profile({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);

  const [loading, setLoading] = useState(false);

  // Theme ==================

  return <ProfileView loading={loading} />;
}

export default Profile;
