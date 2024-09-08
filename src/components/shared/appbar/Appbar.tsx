// AppBar.tsx
import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';

// Define the types for the props
interface AppBarProps {
  appbarTitle: string; // Title for the Appbar
  leftButtonIcon?: string; // Icon name for the left button, if any
  leftButtonOnPress?: () => void; // Function to handle the left button press, if any
  rightButtonIcon?: string; // Icon name for the right button, if any
  rightButtonOnPress?: () => void; // Function to handle the right button press, if any
  customStyles?: {
    appbar?: ViewStyle;
    title?: TextStyle;
    subtitle?: TextStyle;
  };
}

const AppBar: React.FC<AppBarProps> = ({
  appbarTitle,
  leftButtonIcon,
  leftButtonOnPress,
  rightButtonIcon,
  rightButtonOnPress,
  customStyles,
}) => {
  if (
    !appbarTitle &&
    !leftButtonIcon &&
    !leftButtonOnPress &&
    !rightButtonIcon &&
    !rightButtonOnPress
  ) {
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

  return (
    <Appbar.Header style={appbarStyles}>
      {leftButtonIcon && (
        <Appbar.Action
          style={iconStyles}
          icon={leftButtonIcon}
          onPress={leftButtonOnPress}
          color="white"
        />
      )}
      <Appbar.Content title={appbarTitle} titleStyle={titleStyles} />
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
    backgroundColor: '#000', // Black background color
    padding: 8,
  },
  // icon: {
  //   backgroundColor: "#"
  // },
  title: {
    fontFamily: 'SourceSans3-SemiBold',
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
  },
});

export default AppBar;
