import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Livestock from "../screens/livestock";
import Users from "../screens/users";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStack from "./homeStack";
import LivestockStack from "./livestockStack";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logOut, RetriveData } from "../actions/user";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUser(state.userToken));
    };
    fetchData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let c = focused ? "tomato" : "black";
          if (route.name === "HomeStack") {
            iconName = "home";
          } else if (route.name === "LivestockStack") {
            iconName = "cow";
          } else if (route.name === "Users") {
            iconName = "account-circle";
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} color={c} size={24} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let c = focused ? "tomato" : "black";
          return <Text style={{ color: c, fontSize: 12 }}>{route.name}</Text>;
        },
      })}
      initialRouteName="HomeStack"
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="LivestockStack" component={LivestockStack} />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
}
