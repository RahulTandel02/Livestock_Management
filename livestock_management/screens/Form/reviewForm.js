import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import globalSytles from "../../styles/globalSytles";
import { useDispatch } from "react-redux";
import { postLivestock } from "../../actions/livestock";

const ReviewForm = ({ data, setStep, setOpenModal }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(postLivestock(data));
    setOpenModal(false);
  };

  return (
    <ScrollView>
      <Text style={styles.fieldTitle}>Review</Text>
      {/* {data.map((item) => (
          <Text></Text>
        ))} */}
      {Object.entries(data).map((item) => (
        <View style={styles.reviewView} key={item[0]}>
          <Text style={styles.review}>{item[0].toUpperCase()}</Text>
          <Text style={styles.review}>{item[1]}</Text>
        </View>
      ))}
      <View style={globalSytles.btnContainer}>
        <TouchableOpacity
          style={globalSytles.btnView}
          onPress={() => setStep(1)}
        >
          <Text style={globalSytles.btnText}>Edit</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity style={globalSytles.btnView} onPress={handleSubmit}>
          <Text style={globalSytles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  fieldTitle: {
    // fontFamily:'poppins-regular',
    fontSize: 20,
    borderBottomColor: "purple",
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  review: {
    // fontFamily:'poppins-regular',
    marginBottom: 5,
    fontSize: 16,
    flex: 2,
  },
  reviewView: {
    flexDirection: "row",
  },
});
