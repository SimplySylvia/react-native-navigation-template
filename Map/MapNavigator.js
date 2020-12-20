import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Map from "./Map";
import List from "./List";
import BusinessNavigator from "../Business/BusinessNavigator";

const MapStack = createStackNavigator();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name='Map' component={Map} />
      <MapStack.Screen name='List' component={List} />
      <MapStack.Screen
        name='Business'
        component={BusinessNavigator}
        options={{
          headerShown: false,
        }}
      />
    </MapStack.Navigator>
  );
}

export default MapNavigator;
