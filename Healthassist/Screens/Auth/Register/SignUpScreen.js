import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { hostip } from "../../../env/const";

const screenHeight = Dimensions.get("window").height;
const AndroidNotchHeight = StatusBar.currentHeight;

const SignUpScreen = () => {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const dataToTransferToNextScreen = {
    userEmail: email,
    userName: name,
    userPassword: password,
  };
  console.log(hostip)

  console.log(dataToTransferToNextScreen);

  const handleRegisterUser = () => {
    setShowLoader(true);
    const dataToSend = {
      userEmail: email,
    };

    axios
      .post(`http://${hostip}:5000/user/send-otp`, dataToSend, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Processing OPT sending function")
        if (res.status == 200) {
          setShowLoader(false);
          navigation.navigate("OTPVerification", {
            userData: dataToTransferToNextScreen,
          });
        }
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err);
      });
  };

  const getToken = async () => {
    let token = await SecureStore.getItemAsync("authToken");
    console.log(token);
    if (token) {
      navigation.navigate("BottomTab", {
        userEmail: route.params.userData.userEmail,
      });
    } else {
      console.log("there is no token");
    }
  };

  useEffect(() => {
    if (isFocused) {
      getToken();
    }
  }, [isFocused]);

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
          Sign Up
        </Text>
        <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
          Create an account and find the best clinic around you!
        </Text>

        <View style={[tw`mt-5`]}>
          <TextInput
            label="Name"
            value={name}
            mode="outlined"
            onChangeText={(text) => setName(text)}
            activeOutlineColor="#0CBC8B"
            left={
              <TextInput.Icon name="account" color="rgba(51, 51, 51, 0.7)" />
            }
            style={{ backgroundColor: "white" }}
          />

          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={(text) => setEmail(text)}
            activeOutlineColor="#0CBC8B"
            left={<TextInput.Icon name="email" color="rgba(51, 51, 51, 0.7)" />}
            style={[
              tw`mt-3`,
              {
                borderColor: "rgba(51, 51, 51, 0.7)",
                backgroundColor: "white",
              },
            ]}
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
          top: 350,
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
          onPress={handleRegisterUser}
        >
          {showLoader ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
              Continue
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={[tw`my-5 `, { textAlign: "center" }]}>
            Already have an account ?
            <Text style={[{ color: "#0CBC8B", paddingLeft: 2 }]}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
