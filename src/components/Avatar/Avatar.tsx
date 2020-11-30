import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  container: {
    margin: 8,
  },
});

interface AvatarProps {
  img: string;
}

const Avatar: React.FC<AvatarProps> = ({ img }): React.ReactElement => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={{
        uri: img,
      }}
    />
    <Image
      style={{
        width: 128,
        height: 128,
        overflow: "visible",
      }}
      source={require("../../stuff.png")}
    />
  </View>
);
export default Avatar;
