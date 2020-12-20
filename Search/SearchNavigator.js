import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "./Search";

const SearchStack = createStackNavigator();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={Search} />
    </SearchStack.Navigator>
  );
}

export default SearchNavigator;
