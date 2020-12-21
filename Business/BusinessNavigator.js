import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { View, Text, StyleSheet } from "react-native";

import About from "./About";
import Products from "./Products";
import Feed from "./Feed";

const BusinessStack = createMaterialTopTabNavigator();

function BusinessNavigator({ navigation, route }) {
  const { params } = route;
  return (
    <BusinessStack.Navigator>
      <BusinessStack.Screen name='About'>
        {props => <About {...props} />}
      </BusinessStack.Screen>
      <BusinessStack.Screen name='Products'>
        {props => <Products {...props} />}
      </BusinessStack.Screen>
      <BusinessStack.Screen name='Feed'>
        {props => <Feed {...props} />}
      </BusinessStack.Screen>
    </BusinessStack.Navigator>
  );
}

export default BusinessNavigator;
