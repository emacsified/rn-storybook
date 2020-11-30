import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

const PageWrapper: React.FC = ({ children }): React.ReactElement => (
  <View style={styles.container}>{children}</View>
);

export default PageWrapper;
