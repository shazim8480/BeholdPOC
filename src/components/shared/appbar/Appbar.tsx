import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import BeholdWAELogo from '../../../../assets/images/behold-logo.svg';

interface AppBarProps {
  appbarTitle?: string;
  leftButtonIcon?: string;
  leftButtonOnPress?: () => void;
  rightButtonIcon?: string;
  rightButtonOnPress?: () => void;
  customStyles?: {
    appbar?: ViewStyle;
    title?: TextStyle;
    subtitle?: TextStyle;
  };
  appBarVariant?: string;
}

const AppBar: React.FC<AppBarProps> = ({
  appbarTitle,
  leftButtonIcon,
  leftButtonOnPress,
  rightButtonIcon,
  rightButtonOnPress,
  customStyles,
  appBarVariant = 'default',
}) => {
  const isNotAppearAppBar =
    !appbarTitle &&
    !leftButtonIcon &&
    !leftButtonOnPress &&
    !rightButtonIcon &&
    !rightButtonOnPress &&
    appBarVariant;

  if (isNotAppearAppBar) {
    return null;
  }
  const appbarStyles: ViewStyle = {
    ...styles.appbar,
    backgroundColor: Colors.dark.primary,
    ...customStyles?.appbar,
  };

  const titleStyles: TextStyle = {
    ...styles.title,
    ...customStyles?.title,
  };

  const iconStyles: ViewStyle = {
    backgroundColor: Colors.dark.onBackground,
    width: 40,
    height: 40,
    borderRadius: 20,
  };

  return appBarVariant === 'default' ? (
    <Appbar.Header style={appbarStyles}>
      <Appbar.Action
        style={iconStyles}
        icon={'menu'}
        onPress={leftButtonOnPress}
        color="white"
      />
      <View
        style={{
          flex: 1,
        }}>
        <BeholdWAELogo width={'100%'} />
      </View>
      <Appbar.Action
        style={iconStyles}
        icon={'magnify'}
        onPress={rightButtonOnPress}
        color="white"
      />
    </Appbar.Header>
  ) : (
    <Appbar.Header style={appbarStyles}>
      {leftButtonIcon && (
        <Appbar.Action
          style={iconStyles}
          icon={leftButtonIcon}
          onPress={leftButtonOnPress}
          color="white"
        />
      )}
      {appbarTitle && (
        <Appbar.Content title={appbarTitle} titleStyle={titleStyles} />
      )}
      {rightButtonIcon && (
        <Appbar.Action
          style={iconStyles}
          icon={rightButtonIcon}
          onPress={rightButtonOnPress}
          color="white"
        />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbar: {
    height: 70,
  },
  title: {
    fontFamily: 'SourceSans3-SemiBold',
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
  },
});

export default AppBar;
