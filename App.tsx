import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {Colors} from './src/constants/Colors';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.dark.background}
        />
        <AppNavigator />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
