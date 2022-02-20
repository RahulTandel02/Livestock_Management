import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import BasicInformation from "./Form/basicInformation";
import Physical from "./Form/physical";
import Identification from "./Form/Identification";
import BirthInformation from "./Form/birthInformation";
import globalSytles from "../styles/globalSytles";

const FormStatus = ({ setData, data, setStep, setOpenModal }) => {
  return (
    // <View style={{flexDirection:'row'}}>
    //     <View style={styles.stepView}>
    //         <FontAwesome name={step == 1?'circle':'check-circle'} color={step == 1 ? "purple":"green"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Basic</Text>
    //     </View>
    //     <View style={styles.stepView}>
    //         <FontAwesome name={step < 2?'circle-o':step == 2?'circle':'check-circle'} color={step == 2 ? "purple":"green"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Physical </Text>
    //     </View>
    //     <View style={styles.stepView}>
    //         <FontAwesome  name={step < 3?'circle-o':step == 3?'circle':'check-circle'} color={step == 3 ? "purple":"green"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Identification</Text>
    //     </View>
    //     <View style={styles.stepView}>
    //         <FontAwesome  name={step < 4?'circle-o':'circle'}color={step == 4 ? "purple":"black"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Birth</Text>
    //     </View>
    // </View>
    <View style={styles.stepView}>
      <ProgressSteps>
        <ProgressStep label="Basic">
          <View style={{ alignItems: "center" }}>
            <BasicInformation setData={setData} data={data} setStep={setStep} />
          </View>
        </ProgressStep>
        <ProgressStep label="Characteristics">
          <View style={{ alignItems: "center" }}>
            <Physical setData={setData} data={data} setStep={setStep} />
          </View>
        </ProgressStep>
        <ProgressStep label="Identification">
          <View style={{ alignItems: "center" }}>
            <Identification setData={setData} data={data} setStep={setStep} />
          </View>
        </ProgressStep>
        <ProgressStep label="Birth" onSubmit={() => setStep(5)}>
          <View style={{ alignItems: "center" }}>
            <BirthInformation setData={setData} data={data} setStep={setStep} />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default FormStatus;

const styles = StyleSheet.create({
  statusForm: {
    textAlign: "center",
    marginBottom: 5,
    // fontFamily:'poppins-regular',
  },
  stepView: {
    flex: 1,
    marginHorizontal: -50,
  },
});
