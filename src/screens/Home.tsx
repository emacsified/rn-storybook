import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {PageWrapper, Text as CustomText, Title, Subtitle} from '../components';
const Home = () => {
  console.log('Title: ', Title);
  console.log('Subtitle', Subtitle);

  return (
    <PageWrapper>
      <SafeAreaView>
        <ScrollView>
          <CustomText>Home Page custom</CustomText>
          <Title>Title Text</Title>
          <Subtitle>Subtitle Text</Subtitle>
        </ScrollView>
      </SafeAreaView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'white',
  },
});

export default Home;
