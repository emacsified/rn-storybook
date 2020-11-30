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

import { Colors } from "react-native/Libraries/NewAppScreen";

import Home from "./src/screens/Home";
import Movies from "./src/screens/Movies";
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

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    {/* <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="React" component={ReactAppPage} />
                    </Stack.Navigator> */}
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }: any) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "torso";
          } else if (route.name === "Movies") {
            iconName = "play-circle";
          } else if (route.name === "Storybook") {
            iconName = "book";
          }
          // You can return any component that you like here!
          return <FoundationIcon name={iconName} size={size} color={color} />;
        },
      })}
    >
      {!false && <Tab.Screen name="Profile" component={Home} />}
      {!false && <Tab.Screen name="Movies" component={Movies} />}
      {!false && <Tab.Screen name="Storybook" component={Storybook} />}
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
