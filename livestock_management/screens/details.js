import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Details = ({ route }) => {
  const { id } = route.params;
  console.log(id);
  // const livestockData = useSelector((state) =>
  //   state.livestock.filter((item) => item._id === id)
  // );
  return (
    <View>
      <Text>Livestock Information</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    marginHorizontal: 10,
  },
  detailsTitle: {
    textAlign: "center",
    // fontFamily: "roboto-bold",
    fontSize: 20,
    letterSpacing: -1,
    marginTop: 25,
    textTransform: "uppercase",
  },
});
