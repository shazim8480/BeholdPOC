import React from 'react';
import {ScrollView, StyleSheet, View, ViewStyle, TextStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import AppBar from '../appbar/AppBar';

interface RootContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  appbarTitle: string;
  leftButtonIcon?: string;
  leftButtonOnPress?: () => void;
  rightButtonIcon?: string;
  rightButtonOnPress?: () => void;
  customAppbarStyles?: {
    appbar?: ViewStyle;
    title?: TextStyle;
  };
}

// TODO: Solve the problem when FlatList is inside of a ScrollView
// TODO: RootContainer should also contain AppBar and it's props; however, app bar will be in separate component
const RootContainer: React.FC<RootContainerProps> = ({
  children,
  style,
  appbarTitle,
  leftButtonIcon,
  leftButtonOnPress,
  rightButtonIcon,
  rightButtonOnPress,
  customAppbarStyles,
}) => {
  return (
    <>
      <AppBar
        appbarTitle={appbarTitle}
        leftButtonIcon={leftButtonIcon}
        leftButtonOnPress={leftButtonOnPress}
        rightButtonIcon={rightButtonIcon}
        rightButtonOnPress={rightButtonOnPress}
        customStyles={customAppbarStyles}
      />
      <ScrollView
        style={[
          styles.container,
          {backgroundColor: Colors.dark.background},
          style,
        ]}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled" // Ensures keyboard doesn't dismiss when tapping on components
      >
        <View style={styles.innerContainer}>{children}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  innerContainer: {
    flexGrow: 1,
  },
});

export default RootContainer;
