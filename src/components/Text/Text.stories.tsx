import React from 'react';
import {Text, Title, Subtitle} from '../';
import CenterView from '../../../storybook/stories/CenterView';
import {storiesOf} from '@storybook/react-native';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => {
    return <Text>Default Text</Text>;
  })
  .add('Title', () => {
    return <Title>Title Text</Title>;
  })
  .add('Subtitle', () => {
    return <Subtitle>Subtitle Text</Subtitle>;
  });
