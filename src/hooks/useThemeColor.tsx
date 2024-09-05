// import {useColorScheme} from 'react-native';
// import {
//   MD3DarkTheme as PaperDarkTheme,
//   MD3LightTheme as PaperDefaultTheme,
//   MD3Theme,
// } from 'react-native-paper';

// import {Colors} from '../constants/Colors'; // Define your colors here

// const useThemeColor = () => {
//   const colorScheme = useColorScheme();
//   const isDarkMode = colorScheme === 'dark';

//   // Override dark theme
//   const DarkTheme: MD3Theme = {
//     ...PaperDarkTheme,
//     colors: {
//       ...PaperDarkTheme.colors,
//       primary: Colors.dark.primary,
//       background: Colors.dark.background,
//       primaryText: Colors.dark.text.primaryText,
//       surface: Colors.dark.surface,
//     },
//     fonts: {
//       ...PaperDarkTheme.fonts,
//       regular: {fontFamily: 'SourceSans-Regular', fontWeight: 'normal'},
//       medium: {fontFamily: 'SourceSans-SemiBold', fontWeight: '600'},
//       light: {fontFamily: 'SourceSans-Light', fontWeight: '300'},
//       thin: {fontFamily: 'SourceSans-Thin', fontWeight: '200'},
//     },
//   };

//   // Override theme colors here
//   PaperDarkTheme.colors.primary = Colors.dark.primary;
//   PaperDefaultTheme.colors.primary = Colors.light.primary;

//   // Return the appropriate theme based on the system preference
//   //   const theme = isDarkMode ? PaperDarkTheme : PaperDefaultTheme;
//   const theme = PaperDarkTheme;
//   return theme;
// };

// export default useThemeColor;
