import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import { TextInput } from "react-native-paper";
import Button from "../../../Components/Button/Button";
import OTPTextInput from "react-native-otp-textinput";

const screenHeight = Dimensions.get("window").height;
const AndroidNotchHeight = StatusBar.currentHeight;

const OTPVerification = ({ navigation }) => {
  const [OTP, setOTP] = useState();
  const otpInput = useRef(null);

  console.log(OTP)


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
          <OTPTextInput handleTextChange={otp => setOTP(otp)}></OTPTextInput>
        </View>
        <View
          style={{
            position: "relative",
            top: 480,
            margin: "auto",
            width: "100%",
          }}
        >
          <Button press="BottomTab" text="Continue" />
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
