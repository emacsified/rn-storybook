import React from "react";

import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: { fontSize: 14, fontWeight: "normal", lineHeight: 17 },
  title: { fontWeight: "bold", fontSize: 24, lineHeight: 28 },
  subtitle: { fontWeight: "400", fontSize: 20, lineHeight: 24 },
});

const BaseText = ({ children }) => <Text style={styles.default}>{children}</Text>;

const Title = ({ children }) => (
  <BaseText>
    <Text style={styles.title}>{children}</Text>
  </BaseText>
);

const Subtitle = ({ children }) => (
  <BaseText>
    <Text style={styles.subtitle}>{children}</Text>
  </BaseText>
);

export default BaseText;
export { Title, Subtitle };
