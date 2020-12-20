import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import User from "./User";

const UserStack = createStackNavigator();

function UserNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name='User' component={User} />
    </UserStack.Navigator>
  );
}

export default UserNavigator;
