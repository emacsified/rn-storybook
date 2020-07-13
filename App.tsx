// TODO: Change standard-release to handle emoji verisons

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler";

import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {createStackNavigator} from '@react-navigation/stack';
import FoundationIcon from "react-native-vector-icons/Foundation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import Home from "./src/screens/Home";
import Storybook from "./storybook";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

const ReactAppPage = () => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <Header />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit
            {' '}
            <Text style={styles.highlight}>App.tsx</Text>
            {' '}
            to change this screen and then come
            back to see your edits.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
        </View>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  </SafeAreaView>
);

const App = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {/* <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="React" component={ReactAppPage} />
                    </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName;
            console.log(focused, color, size);
            if (route.name === "home") {
              iconName = "paw";
            } else if (route.name === "react") {
              iconName = "lightbulb";
            } else if (route.name === "storybook") {
              iconName = "book";
            }
            // You can return any component that you like here!
            return <FoundationIcon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="react" component={ReactAppPage} />
        <Tab.Screen name="storybook" component={Storybook} />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);

export default App;
