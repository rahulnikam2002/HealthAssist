import { View, Text, Image, Dimensions, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
// import OnBoardingScreenImg1 from "../../assets/onBoardingScreenImgs.jpg";
import OnBoardingScreenImg2 from "../../assets/78892-doctor-profile.gif";
import OnBoardingScreenImg3 from "../../assets/89685-care-services.gif";
import OnBoardingScreenImg4 from "../../assets/65709-hospital-4.gif";
import tw from "tailwind-react-native-classnames";

let screenHeight = Dimensions.get("window").height;
const AndroidNotchHeight = StatusBar.currentHeight
const imagesArray = [OnBoardingScreenImg4, OnBoardingScreenImg2, OnBoardingScreenImg3]

const OnBoarding = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", height: screenHeight + AndroidNotchHeight }}>
      <View
        style={{
          height: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          source={imagesArray[[Math.floor(Math.random() * imagesArray.length)]]}
          style={{ width: 600, height: 300, resizeMode: "contain" }}
        />
        <Text style={{ color: "#333333", fontSize: 26, fontWeight: "700" }}>
          Consult only with a
        </Text>
        <Text style={{ color: "#0CBC8B", fontSize: 26, fontWeight: "700" }}>
          Doctor you trust
        </Text>
        <Text
          style={{
            marginHorizontal: 40,
            marginTop: 20,
            textAlign: "center",
            fontSize: 16,
            color: "rgba(51, 51, 51, 0.7)",
          }}
        >
          We have the best, Professional and affordable
        </Text>
        <Text
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: 16,
            color: "rgba(51, 51, 51, 0.7)",
          }}
        >
          Clinics, We can help you to find the best
        </Text>
        <Text
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: 16,
            color: "rgba(51, 51, 51, 0.7)",
          }}
        >
          Clinics nearest you.
        </Text>
      </View>
      <View style={{ marginHorizontal: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#0CBC8B",
            position: "relative",
            bottom: 80,
            padding: 12,
            borderRadius: 5
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{textAlign: "center", color: "white", fontSize: 15}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
