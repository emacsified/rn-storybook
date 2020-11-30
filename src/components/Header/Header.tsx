import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "..";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#6495ED",
    height: 90,
    padding: 8,
    paddingTop: 40,
    paddingLeft: 24,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 50,
  },
});

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }): React.ReactElement => (
  <View style={styles.header}>
    <Title style={styles.title}>{text}</Title>
  </View>
);

export default Header;
