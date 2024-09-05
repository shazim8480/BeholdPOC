// components/RootContainer.tsx
import React from 'react';
import {ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Colors} from '../../../constants/Colors';

interface RootContainerProps {
  children: React.ReactNode;
  style?: ViewStyle; // Allowing users to pass custom styles
}

const RootContainer: React.FC<RootContainerProps> = ({children, style}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allows the container to fill the screen
  },
  contentContainer: {
    paddingVertical: 16, // Adding some padding to prevent content from touching the edges
    paddingHorizontal: 16,
  },
  innerContainer: {
    flexGrow: 1, // Makes sure content fills the space when there is not enough to scroll
  },
});

export default RootContainer;
