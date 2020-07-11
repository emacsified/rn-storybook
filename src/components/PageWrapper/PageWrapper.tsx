import React from 'react';
import {SafeAreaView} from 'react-native';
const PageWrapper: React.FC = ({children}): React.ReactElement => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default PageWrapper;
