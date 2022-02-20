import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import InputText from "../shared/inputText";
import FormStatus from "./formStatus";
import BasicInformation from "./Form/basicInformation";
import Physical from "./Form/physical";
import Identification from "./Form/Identification";
import BirthInformation from "./Form/birthInformation";
import ReviewForm from "./Form/reviewForm";
import { useSelector, useDispatch } from "react-redux";
import { postLivestock } from "../actions/livestock";

const multiForm = (step, data, setStep, setOpenModal) => {
  switch (step) {
    case 5:
      return (
        <ReviewForm data={data} setStep={setStep} setOpenModal={setOpenModal} />
      );
    default:
      break;
  }
};

const Form = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userData._id);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    user_id: id,
    name: "",
    type: "",
    breed: "",
    label: "",
    internalid: "",
    status: "",
    gender: "",
    isneutered: false,
    isbreedingstock: false,
    color: "",
    description: "",
    tagnumber: "",
    tagcolor: "",
    electronicid: "",
    registrynumber: "",
    birthdate: "",
    birthweigth: "",
    israised: false,
  });

  const handleSubmit = () => {
    // dispatch(postLivestock(data))
    // setOpenModal(false);
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.formContainer} behavior="height">
        {/* <View style={{justifyContent:'flex-end'}}> */}
        {multiForm(step, data, setStep, setOpenModal)}
        {step !== 5 && (
          <FormStatus setData={setData} data={data} setStep={setStep} />
        )}
        {/* </View> */}
      </KeyboardAvoidingView>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 15,
    flex: 1,
  },
  formtitle: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
    // fontFamily:'poppins-regular'
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
