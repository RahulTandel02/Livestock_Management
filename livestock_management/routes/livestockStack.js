import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blog from "../screens/blog";
import Loading from "../screens/loading";
import Livestock from "../screens/livestock";
import Form from "../screens/form";
import Details from "../screens/details";

const Stack = createNativeStackNavigator();

function LivestockStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#C5CE2C" },
        headerTitleStyle: { color: "#E6F9E7", fontSize: 24 },
      }}
      initialRouteName="Livestock"
    >
      <Stack.Screen name="Livestock" component={Livestock} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

export default LivestockStack;
