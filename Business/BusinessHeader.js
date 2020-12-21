import React from "react";

import { StyleSheet, Text, Image, View } from "react-native";

function BusinessHeader({ business }) {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: business.logo }}
      />
      <Text>{business.name}</Text>
    </View>
  );
}

export default BusinessHeader;
