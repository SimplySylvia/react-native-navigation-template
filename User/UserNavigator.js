import * as React from "react";
import { Button, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Feed from "./Feed";
import Profile from "./Profile";
import Settings from "./Settings";

const UserStack = createMaterialTopTabNavigator();

function UserNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <UserStack.Navigator>
        <UserStack.Screen name='Feed' component={Feed} />
        <UserStack.Screen name='Profile' component={Profile} />
        <UserStack.Screen name='Settings' component={Settings} />
      </UserStack.Navigator>
    </View>
  );
}

export default UserNavigator;
