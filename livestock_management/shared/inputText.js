import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

const InputText = ({ data, setData, placeholder }) => {
  const place = Object.keys(data).filter((d) => d === placeholder);
  const ismulti = placeholder === "description" ? true : false;
  return (
    <View style={styles.textInputView}>
      <Text style={styles.labelText}>{place[0].toUpperCase()}</Text>
      <TextInput
        value={data[placeholder]}
        placeholder={place[0].toUpperCase()}
        style={styles.textInput}
        onChangeText={(text) => setData({ ...data, [placeholder]: text })}
        multiline={ismulti}
        maxLength={50}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#b0b0b0",
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 15,
  },
  textInput: {
    flex: 5,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderLeftColor: "#b0b0b0",
    borderLeftWidth: 1,
    // fontFamily:'poppins-regular'
  },
  labelText: {
    flex: 2,
    textAlign: "center",
    fontSize: 14,
    color: "#47423f",
    // fontFamily:'poppins-regular'
  },
});
