import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Contacts({ navigation, route }) {
  return (
    <View>
      <Text>Contact</Text>
      <Button
        title='Dalton'
        onPress={() =>
          navigation.push("Message", {
            name: "Dalton",
          })
        }
      />
    </View>
  );
}

export default Contacts;
