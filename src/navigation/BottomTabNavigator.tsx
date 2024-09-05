// navigation/BottomTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, IconButton} from 'react-native-paper';
import {BottomTabParamList} from './types/navigation';

import Home from '../screens/home';
import Explore from '../screens/explore';
import Collections from '../screens/collections';
import Profile from '../screens/profile';
import {StyleSheet, View} from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => (
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName: string = '';
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Explore') {
          iconName = 'compass-outline';
        } else if (route.name === 'Collections') {
          iconName = 'bookmark-outline';
        } else if (route.name === 'Profile') {
          iconName = 'account-circle-outline';
        }
        return (
          <View style={focused ? styles.activeIconContainer : null}>
            <Icon
              source={iconName}
              color={focused ? 'black' : 'gray'}
              size={28}
            />
          </View>
        );
      },
      tabBarStyle: {
        paddingVertical: 8,
        height: 80,
        backgroundColor: '#0F0F0F',
      },
      tabBarActiveTintColor: '#82FC9A',
      tabBarInactiveTintColor: 'white',
      headerShown: false,
      tabBarLabelStyle: {
        fontFamily: 'SourceSans3-Bold',
        fontSize: 12,
        marginBottom: 8,
      },
    })}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Explore" component={Explore} />
    <BottomTab.Screen name="Collections" component={Collections} />
    <BottomTab.Screen name="Profile" component={Profile} />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  activeIconContainer: {
    backgroundColor: '#82FC9A',
    borderRadius: 50,
    padding: 5,
  },
});

export default BottomTabNavigator;
