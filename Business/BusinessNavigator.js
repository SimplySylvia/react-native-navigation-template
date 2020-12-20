import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";

import About from "./About";

const BusinessStack = createStackNavigator();

function BusinessHeader(props) {
  console.log(props);
  const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: "row",
      padding: 0,
    },
    headerItem: {
      backgroundColor: "#fff",
      flex: 1,
      textAlign: "center",
      height: "100%",
    },
  });

  function isActive(name) {
    return name === props.active
      ? { backgroundColor: "#1f1f1f", color: "#fff" }
      : {};
  }

  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerItem, ...isActive("About") }}>About</Text>
      <Text style={{ ...styles.headerItem, ...isActive("Products") }}>
        Products
      </Text>
      <Text style={{ ...styles.headerItem, ...isActive("Feed") }}>Feed</Text>
    </View>
  );
}

function BusinessNavigator({ navigation, route }) {
  const { params } = route;
  return (
    <BusinessStack.Navigator>
      <BusinessStack.Screen
        name='About'
        options={{
          headerLeft: null,
          headerTitle: props => <BusinessHeader {...props} active={"About"} />,
          headerStyles: {
            margin: 0,
            padding: 0,
          },
        }}
      >
        {props => <About {...props} />}
      </BusinessStack.Screen>
    </BusinessStack.Navigator>
  );
}

export default BusinessNavigator;
