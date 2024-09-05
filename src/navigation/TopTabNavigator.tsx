// navigation/TopTabNavigator.tsx
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabParamList} from './types/navigation';

import Trending from '../screens/trending';
import Feed from '../screens/feed';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTabNavigator: React.FC = () => (
  <TopTab.Navigator
    screenOptions={{
      tabBarIndicatorStyle: {backgroundColor: '#00FF00'},
      tabBarLabelStyle: {color: '#FFFFFF'},
      tabBarStyle: {backgroundColor: '#121212'},
    }}>
    <TopTab.Screen name="Trending" component={Trending} />
    <TopTab.Screen name="Feed" component={Feed} />
  </TopTab.Navigator>
);

export default TopTabNavigator;
