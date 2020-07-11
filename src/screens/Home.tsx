import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {PageWrapper} from '../components';
const Home = () => {
  return (
    <PageWrapper>
      <Text>Home Page</Text>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'white',
  },
});

export default Home;
