import React from 'react';

import {Text, StyleSheet} from 'react-native';

const BaseText = () => {
  return <Text style={styles.default} />;
};

const Title = () => {
  <BaseText>
    <Text style={styles.title}>This is Title Text</Text>
  </BaseText>;
};

const styles = StyleSheet.create({
  default: {fontSize: 14, fontWeight: 'normal', lineHeight: 1},
  title: {},
});

export {Title};
