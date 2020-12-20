import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function List({ navigation }) {
  return (
    <View>
      <Text>List</Text>
      <Button
        title='Business Test'
        onPress={() =>
          navigation.push("Business", {
            id: "test name",
          })
        }
      />
      <Button
        title='Business Test'
        onPress={() =>
          navigation.push("Business", {
            id: "test name 2",
          })
        }
      />
      <Button
        title='Business Test'
        onPress={() =>
          navigation.push("Business", {
            id: "test name 3",
          })
        }
      />
    </View>
  );
}

export default List;
