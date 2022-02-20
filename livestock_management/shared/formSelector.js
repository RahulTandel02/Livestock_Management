import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

//make form validation before submission
const FormSelector = ({ array, data, placeholder, setData }) => {
  const [selectedValue, setSelectedValue] = useState("Java");
  return (
    <View style={styles.pickerView}>
      <Picker
        selectedValue={data[placeholder]}
        onValueChange={(itemValue, itemIndex) =>
          setData({ ...data, [placeholder]: itemValue })
        }
      >
        <Picker.Item
          label={`${placeholder.toUpperCase()}`}
          value={"Type"}
          enabled={true}
          style={styles.placeholder}
        />
        {array.map((a) => (
          <Picker.Item
            label={`${a}`}
            value={`${a}`}
            style={styles.picker}
            key={`${a}`}
          />
        ))}
      </Picker>
    </View>
  );
};

export default FormSelector;

const styles = StyleSheet.create({
  pickerView: {
    borderColor: "#b0b0b0",
    borderWidth: 1,
    marginBottom: 15,
  },
  picker: {
    // fontFamily:'roboto-bold'
  },
  placeholder: {
    color: "#b0b0b0",
  },
});
