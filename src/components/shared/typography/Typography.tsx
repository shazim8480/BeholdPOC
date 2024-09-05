// components/Typography.tsx
import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, TextStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';

type TypographyProps = {
  variant: 'headline' | 'title' | 'subtitle' | 'body' | 'caption' | 'overline'; // Define the different text variants
  children: React.ReactNode;
  style?: TextStyle; // Optional custom styles
};

const Typography: React.FC<TypographyProps> = ({variant, children, style}) => {
  const getTextStyle = (): TextStyle => {
    switch (variant) {
      case 'headline':
        return {
          ...styles.headline,
          color: Colors.dark.text.primaryText,
          fontFamily: 'SourceSans3-SemiBold',
        };
      case 'title':
        return {
          ...styles.title,
          color: Colors.dark.text.primaryText,
          fontFamily: 'SourceSans3-SemiBold',
        };
      case 'subtitle':
        return {
          ...styles.subtitle,
          color: Colors.dark.text.secondaryText,
          fontFamily: 'SourceSans3-Regular',
        };
      case 'body':
        return {
          ...styles.body,
          color: Colors.dark.text.secondaryText,
          fontFamily: 'SourceSans3-Regular',
        };
      case 'caption':
        return {
          ...styles.caption,
          color: Colors.dark.text.secondaryText,
          fontFamily: 'SourceSans3-Light',
        };
      case 'overline':
        return {
          ...styles.overline,
          color: Colors.dark.text.secondaryText,
          fontFamily: 'SourceSans3-Thin',
        };
      default:
        return {
          ...styles.body,
          color: Colors.dark.text.primaryText,
          fontFamily: 'SourceSans3-Regular',
        };
    }
  };

  return <Text style={[getTextStyle(), style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 30,
    // fontWeight: '700',
    lineHeight: 36,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    // fontWeight: '600',
    lineHeight: 30,
    marginVertical: 6,
  },
  subtitle: {
    fontSize: 20,
    // fontWeight: '500',
    lineHeight: 26,
    marginVertical: 4,
  },
  body: {
    fontSize: 16,
    // fontWeight: '400',
    lineHeight: 22,
    marginVertical: 2,
  },
  caption: {
    fontSize: 14,
    // fontWeight: '400',
    lineHeight: 18,
    marginVertical: 2,
  },
  overline: {
    fontSize: 12,
    // fontWeight: '400',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginVertical: 1,
  },
});

export default Typography;
