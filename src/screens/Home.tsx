import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Title, Subtitle, Header, PageWrapper } from "../components";

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
  },
  center: {
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});

const Home = () => (
  <PageWrapper>
    <Header text="Profile" />
    <ScrollView style={styles.container}>
      <View style={styles.center}>
        <Avatar img="https://api.adorable.io/avatars/400/1c8e8a6e8d1fe52b782b280909abeb38.png" />
        <Title style={styles.textCenter}>Madeleine Whitehouse</Title>
      </View>
    </ScrollView>
  </PageWrapper>
);

export default Home;
