import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import globalSytles from "../styles/globalSytles";
import { AntDesign } from "@expo/vector-icons";
import Form from "./form";
import { MaterialIcons } from "@expo/vector-icons";
import FormStatus from "./formStatus";
import { useSelector, useDispatch } from "react-redux";
import { getLivestock } from "../actions/livestock";

// Make a MENU for EDIT,DELETE

const Livestock = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        await dispatch(getLivestock(user._id));
      }
    };
    fetchData();
  }, []);
  const livestock = useSelector((state) => state.livestock);
  const [openModal, setOpenModal] = useState(false);
  const data = [
    { status: "active", name: "ABC", type: "cattle", key: "1" },
    { status: "active", name: "DEF", type: "goat", key: "2" },
    { status: "active", name: "GHI", type: "buffalow", key: "3" },
    { status: "active", name: "JKL", type: "cow", key: "5" },
    { status: "active", name: "MNO", type: "cow", key: "6" },
    { status: "active", name: "PQR", type: "cow", key: "7" },
    { status: "active", name: "STU", type: "cow", key: "8" },
    { status: "active", name: "VWX", type: "cow", key: "9" },
    { status: "active", name: "YZ", type: "cow", key: "10" },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { id: item._id })}
      >
        <View style={styles.container}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Modal visible={openModal} animationType="slide">
        <MaterialIcons
          name="close"
          color={"black"}
          size={25}
          onPress={() => setOpenModal(false)}
          style={{ ...styles.modalToggle, ...styles.modalClose }}
        />
        <Form setOpenModal={setOpenModal} />
      </Modal>
      <View>
        <FlatList
          data={livestock}
          renderItem={renderItem}
          style={{ zIndex: -1 }}
          keyExtractor={(item) => item._id}
        />
      </View>
      <TouchableOpacity
        style={styles.formBtn}
        activeOpacity={0.5}
        onPress={() => setOpenModal(true)}
      >
        <AntDesign name="plus" size={35} color={"#fff"} />
      </TouchableOpacity>
    </>
  );
};

export default Livestock;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    margin: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  name: {
    color: "#fff",
    paddingHorizontal: 10,
  },
  formBtn: {
    width: 80,
    height: 80,
    borderRadius: 60,
    backgroundColor: "#ee6e73",
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 100,
  },
  BtnText: {
    position: "absolute",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
