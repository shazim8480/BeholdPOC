import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootContainer from '../../components/shared/rootcontainer/RootContainer';
import Typography from '../../components/shared/typography/Typography';

const Home = () => {
  return (
    <RootContainer>
      <Typography variant="title">Home</Typography>
    </RootContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
