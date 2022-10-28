import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { hostip } from "../../../env/const";

let screenHeight = Dimensions.get("window").height;
const AndroidNotchHeight = StatusBar.currentHeight;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const isFocused = useIsFocused();

  const dataToTransferToNextScreen = {
    userEmail: email,
    userPassword: password,
  };
  
  const handleLoginUser = () => {
    console.log("Hello world! Login");
    setShowLoader(true);
    const dataToSend = {
      userEmail: email,
      userPassword: password
    };

    axios
      .post(`http://${hostip}:5000/user/login`, dataToSend, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Processing OPT sending function")
        if (res.status == 200) {
          setShowLoader(false);
          setToken(res.data.userToken)
          navigation.navigate("BottomTab", {
            userData: dataToTransferToNextScreen,
          });
        }
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err);
      });
  };

  const setToken = async (token) => {
    await SecureStore.setItemAsync("authToken", token);
  };
  // useEffect(() => {
  //   if (isFocused) {
  //     getToken();
  //   }
  // }, [isFocused]);


  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 25,
        height: screenHeight + AndroidNotchHeight,
        backgroundColor: "white",
      }}
    >
      <StatusBar backgroundColor="black" />

      <View>
        <Text style={{ fontSize: 25, marginBottom: 10, fontWeight: "700" }}>
          Sign In
        </Text>
        <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
          We are happy to see you again, You can continue after login.
        </Text>

        <View style={[tw`mt-5`]}>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={(text) => setEmail(text)}
            activeOutlineColor="#0CBC8B"
            left={<TextInput.Icon name="email" color="rgba(51, 51, 51, 0.7)" />}
            style={{ backgroundColor: "white" }}
          />

          <TextInput
            label="Password"
            value={password}
            mode="outlined"
            onChangeText={(text) => setPassword(text)}
            activeOutlineColor="#0CBC8B"
            left={<TextInput.Icon name="lock" color="rgba(51, 51, 51, 0.7)" />}
            secureTextEntry
            style={[
              tw`mt-3`,
              {
                borderColor: "rgba(51, 51, 51, 0.7)",
                backgroundColor: "white",
              },
            ]}
          />
        </View>
      </View>
      <View
        style={{
          position: "relative",
          top: 400,
          width: "100%",
        }}
      >
        <View
          style={{
            position: "relative",
            top: 0,
            margin: "auto",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0CBC8B",
              padding: 10,
              borderRadius: 5,
            }}
            onPress={handleLoginUser}
          >
            {showLoader ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Continue
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={[tw`my-5 `, { textAlign: "center" }]}>
              Don't have an account ?
              <Text style={[{ color: "#0CBC8B", paddingLeft: 2 }]}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
