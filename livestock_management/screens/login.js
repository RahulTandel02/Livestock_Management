import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import globalSytles from "../styles/globalSytles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/user";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({
    text: "",
    focus: false,
    iconFocus: false,
  });
  const [password, setPassword] = useState({
    text: "",
    focus: false,
    iconFocus: false,
  });

  const handleSubmit = () => {
    if (email.text !== "" && password.text !== "") {
      dispatch(loginUser({ email: email.text, password: password.text }));
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.loginContainer}
        >
          <View style={styles.loginPadding}>
            <Text style={styles.titleText}>Login</Text>
            <View style={email.focus ? styles.flexFocused : styles.flex}>
              <MaterialIcons
                name="mail-outline"
                color={email.iconFocus == true ? "#ec4141" : "#bababa"}
                size={20}
                style={styles.iconStyle}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                onChangeText={(text) => setEmail({ ...email, text: text })}
                placeholderTextColor={"#bababa"}
                spellCheck={false}
                autoCorrect={false}
                onFocus={() =>
                  setEmail({ ...email, focus: true, iconFocus: true })
                }
                onBlur={() =>
                  email.text === ""
                    ? setEmail({ ...email, focus: false, iconFocus: false })
                    : setEmail({ ...email, focus: false, iconFocus: true })
                }
              />
            </View>
            <View style={password.focus ? styles.flexFocused : styles.flex}>
              <MaterialIcons
                name="lock-outline"
                color={password.iconFocus == true ? "#ec4141" : "#bababa"}
                size={20}
                style={styles.iconStyle}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) =>
                  setPassword({ ...password, text: text })
                }
                style={styles.textInput}
                onFocus={() =>
                  setPassword({ ...password, focus: true, iconFocus: true })
                }
                onBlur={() =>
                  password.text === ""
                    ? setPassword({
                        ...password,
                        focus: false,
                        iconFocus: false,
                      })
                    : setPassword({
                        ...password,
                        focus: false,
                        iconFocus: true,
                      })
                }
                autoCorrect={false}
                spellCheck={false}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.8}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginText}>Login</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.account}>
              Don't Have an Account?{" "}
              <Text
                style={{ fontWeight: "bold", color: "black" }}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    // fontFamily:'roboto-regular',
    position: "relative",
  },
  loginPadding: {
    paddingHorizontal: 30,
    width: "100%",
  },
  titleText: {
    // fontFamily:'roboto-bold',
    fontSize: 35,
    marginBottom: 35,
  },
  flex: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#bababa",
  },
  textInput: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#ec4141",
    fontSize: 15,
    flex: 1,
  },
  flexFocused: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ec4141",
  },
  iconStyle: {
    fontWeight: "100",
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 11,
    textAlign: "right",
    color: "#545454",
    fontWeight: "bold",
    marginBottom: 35,
  },
  loginBtn: {
    backgroundColor: "#fe4e32",
    borderRadius: 5,
    elevation: 6,
  },
  loginBtnPressed: {
    backgroundColor: "#fe4e32",
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
  },
  account: {
    marginTop: 60,
    textAlign: "center",
    color: "#545454",
  },
});
