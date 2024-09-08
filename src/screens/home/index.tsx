import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootContainer from '../../components/shared/rootcontainer/RootContainer';
import Typography from '../../components/shared/typography/Typography';

const Home = () => {
  return (
    <RootContainer
      appbarTitle="Explore"
      leftButtonIcon="arrow-left"
      leftButtonOnPress={() => console.log('Back pressed')}
      rightButtonIcon="magnify"
      rightButtonOnPress={() => console.log('Search pressed')}>
      <Typography variant="title">Home</Typography>
    </RootContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
