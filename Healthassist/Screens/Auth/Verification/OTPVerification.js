import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native-paper";
import Button from "../../../Components/Button/Button";
import OTPTextInput from "react-native-otp-textinput";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { hostip } from "../../../env/const";

const screenHeight = Dimensions.get("window").height;
const AndroidNotchHeight = StatusBar.currentHeight;

const OTPVerification = ({ route }) => {
  const [OTP, setOTP] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const otpInput = useRef(null);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const dataToSend = {
    userName: route.params.userData.userName,
    userEmail: route.params.userData.userEmail,
    userPassword: route.params.userData.userPassword,
    userOTP: OTP,
  };

  console.log(dataToSend);

  const handleOTPVerificationAndRegisterUser = () => {
    console.log("Hellooooooooooooooooooo");
    setShowLoader(true);
    axios
      .post(`http://${hostip}:5000/user/register`, dataToSend, {
        withCredentials: true,
      })
      .then((res) => {
        setShowLoader(false);
        console.log("OPT VERIFIED")
        navigation.navigate("BottomTab", {
          userEmail: route.params.userData.userEmail,
        });
        setToken(res.data.userToken);
        console.log(res.data);
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err.message);
      });
  };

  const setToken = async (token) => {
    await SecureStore.setItemAsync("authToken", token);
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

    if (isFocused) {
      SecureStore.getItemAsync("authToken").then(token => {
        if(token){
          navigation.navigate("BottomTab", {
            userEmail: route.params.userData.userEmail,
          });
        } else {
          console.log("there is no token");
        }
      }).catch(err => {
        console.log(err)
      })
    }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" />

      <View
        style={{
          paddingTop: 60,
          paddingHorizontal: 25,
          height: screenHeight + AndroidNotchHeight,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 25, marginBottom: 10, fontWeight: "700" }}>
          Verify Account
        </Text>
        <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
          We've send you an 4 digit verification code on you email to know
          whether this email belongs to you!
        </Text>
        <View style={[tw`mt-5`]}>
          {/* <TextInput
            label="OTP"
            value={OTP}
            mode="outlined"
            onChangeText={(text) => setOTP(text)}
            activeOutlineColor="#0CBC8B"
            left={<TextInput.Icon name="lock" color="rgba(51, 51, 51, 0.7)" />}
            style={{ backgroundColor: "white" }}
          /> */}
          <OTPTextInput handleTextChange={(otp) => setOTP(otp)}></OTPTextInput>
        </View>
        <View
          style={{
            position: "relative",
            top: 480,
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
            onPress={handleOTPVerificationAndRegisterUser}
          >
            {showLoader ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Verify
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[tw`my-5 `, { textAlign: "center" }]}>
              Change your email?
              <Text style={[{ color: "#0CBC8B", paddingLeft: 2 }]}>
                {" "}
                Go Back
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;
