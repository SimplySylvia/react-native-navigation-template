import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";

import BusinessNavigator from "../Business/BusinessNavigator";

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen
        name='Business'
        component={BusinessNavigator}
        options={({ route }) => ({ title: route.params.id })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
