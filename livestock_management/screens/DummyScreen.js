import React from "react";
import { Text, View } from "react-native";

const DummyScreen = ({ route }) => {
  alert(route.params.id);
  return (
    <View>
      <Text>DummyScreen</Text>
    </View>
  );
};

export default DummyScreen;
