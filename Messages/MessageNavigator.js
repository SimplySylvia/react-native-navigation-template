import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Messages from "./Messages";
import Contacts from "./Contacts";

const MessageStack = createStackNavigator();

function MessageNavigator() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name='Contacts' component={Contacts} />
      <MessageStack.Screen
        name='Message'
        component={Messages}
        options={({ route }) => ({ title: route.params.name })}
      />
    </MessageStack.Navigator>
  );
}

export default MessageNavigator;
