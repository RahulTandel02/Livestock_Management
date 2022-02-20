import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import InputText from "../../shared/inputText";
import FormSelector from "../../shared/formSelector";
import globalSytles from "../../styles/globalSytles";

const BasicInformation = ({ setData, data, setStep }) => {
  const array = ["Cow", "Buffalow", "Chicken"];
  const status = [
    "Active",
    "Culled",
    "Deceased",
    "Dry",
    "Lactating",
    "Off Farm",
    "Quarantined",
    "Sick",
    "Sold",
    "Weening",
  ];
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formtitle}>Basic Information</Text>

      <InputText data={data} setData={setData} placeholder="name" />
      {/* <InputText data={data} setData={setData} placeholder="type"/> */}
      <FormSelector
        array={array}
        data={data}
        setData={setData}
        placeholder="type"
      />
      <InputText data={data} setData={setData} placeholder="breed" />
      <InputText data={data} setData={setData} placeholder="label" />
      {/* <InputText data={data} setData={setData} placeholder="status"/> */}
      <FormSelector
        array={status}
        data={data}
        setData={setData}
        placeholder="status"
      />
    </View>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  formtitle: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
    // fontFamily:'poppins-regular',
    paddingHorizontal: 70,
  },
  btnView: {
    backgroundColor: "purple",
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    // fontFamily:'poppins-regular',
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
  },
});
