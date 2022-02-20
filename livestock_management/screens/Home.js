import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

// Add Search Bar to search blog

const Home = ({ navigation, route }) => {
  const [data, setData] = useState([{ title: "", content: "", _id: "1" }]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://10.0.2.2:5000/blog");
      setData(res.data);
      if (data.title != "") {
        navigation.navigate("Home", {
          data: data,
        });
      }
    };
    getData();
  }, []);
  console.log("loaded");
  const Item = ({ data }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Blog", data)}>
      <View style={styles.item}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "teal",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 2,
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    // fontFamily:'roboto-bold'
  },
});

export default Home;
