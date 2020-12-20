import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Map({ navigation }) {
  return (
    <View>
      <Text>Map</Text>
      <Button title='List' onPress={() => navigation.navigate("List")} />
      <Button
        title='Business Test'
        onPress={() =>
          navigation.push("Business", {
            id: "test name",
          })
        }
      />
    </View>
  );
}

export default Map;
