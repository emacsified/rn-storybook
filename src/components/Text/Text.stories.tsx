import React from "react";
import { storiesOf } from "@storybook/react-native"; // eslint-disable-line import/no-extraneous-dependencies
import { Text, Title, Subtitle } from "..";

storiesOf("Text", module)
  .add("default", () => <Text>Default Text</Text>)
  .add("Title", () => <Title>Title Text</Title>)
  .add("Subtitle", () => <Subtitle>Subtitle Text</Subtitle>);
