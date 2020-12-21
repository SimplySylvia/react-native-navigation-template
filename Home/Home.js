import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import useBusinesses from "../hooks/useBusinesses";

function Home({ navigation }) {
  const [businesses, fetchBusinesses] = useBusinesses();

  function generateBusinesses() {
    return businesses.map(business => (
      <Button
        key={business.id}
        title={business.name}
        onPress={() =>
          navigation.push("Business", {
            id: business.id,
            name: business.name,
            logo: business.logo,
          })
        }
      />
    ));
  }

  return (
    <View>
      <Text>Home</Text>
      {generateBusinesses()}
    </View>
  );
}

export default Home;
