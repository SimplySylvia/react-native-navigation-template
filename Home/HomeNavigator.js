import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";

import BusinessNavigator from "../Business/BusinessNavigator";
import BusinessHeader from "../Business/BusinessHeader";

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen
        name='Business'
        component={BusinessNavigator}
        options={({ route }) => ({
          headerTitle: props => (
            <BusinessHeader {...props} business={route.params} />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
