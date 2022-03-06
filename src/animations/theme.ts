import theme from '../assets/theme';
import {useDispatch} from 'react-redux';
import {themeSlice} from '../slices';
import {useState} from 'react';
import {Animated} from 'react-native';

const getTheme = themeIndex => {
  const dispatch = useDispatch();

  // Theme ==================
  const [bgAnimation, setBgAnimation] = useState(
    new Animated.Value(themeIndex),
  );
  const [fontAnimation, setFontAnimation] = useState(
    new Animated.Value(themeIndex),
  );
  const _handleAnimation = (toggled: boolean) => {
    const theme = toggled ? 0 : 1;
    Animated.timing(bgAnimation, {
      toValue: theme,
      duration: 100,
      useNativeDriver: false,
    }).start();

    Animated.timing(fontAnimation, {
      toValue: theme,
      duration: 100,
      useNativeDriver: false,
    }).start();

    dispatch(
      themeSlice.actions.setTheme({
        theme: theme,
      }),
    );
  };

  const themeBgStyle = {
    backgroundColor: bgAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.dark.bgColor, theme.light.bgColor],
    }),
  };

  const themeFontStyle = {
    color: fontAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.dark.color, theme.light.color],
    }),
  };

  return {
    themeBgStyle,
    themeFontStyle,
    _handleAnimation,
  };
};

export default getTheme;
