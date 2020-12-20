import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "../Home/HomeNavigator";
import MapNavigator from "../Map/MapNavigator";
import SearchNavigator from "../Search/SearchNavigator";
import MessageNavigator from "../Messages/MessageNavigator";
import UserNavigator from "../User/UserNavigator";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Map' component={MapNavigator} />
      <Tab.Screen name='Search' component={SearchNavigator} />
      <Tab.Screen name='Messages' component={MessageNavigator} />
      <Tab.Screen name='User' component={UserNavigator} />
    </Tab.Navigator>
  );
}

export default MyTabs;
