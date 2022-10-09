import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
//Screens
import OnBoarding from "./Screens/OnBoarding/OnBoarding";
import LoginScreen from "./Screens/Auth/Login/Login";
import HomeScreen from "./Screens/Home/Home";
import BottomTab from "./Screens/BottomTabs/BottomTab";
import SignUpScreen from "./Screens/Auth/Register/SignUpScreen";
import OTPVerification from "./Screens/Auth/Verification/OTPVerification";
import ProfileMoreOptions from "./Screens/Profile/MoreOptions";
import SingleClinicListing from "./Screens/Listing/singleClinicListing";
import SingleAppointmentHistory from "./Screens/AppointmentHistory/SingleAppointmentHistory";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator();
const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export default function App() {
  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   SecureStore.getItemAsync("authToken")
  //     .then((token) => {
  //       if (token) {
  //         navigation.navigate("BottomTab");
  //       } else {
  //         console.log("there is no token");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [isFocused]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: "horizontal-inverted",
        }}
      >
        <Stack.Screen name="onBoardingScreen" component={OnBoarding} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen
          name="ProfileMoreOptions"
          component={ProfileMoreOptions}
        />
        <Stack.Screen
          name="SingleClinicScreen"
          component={SingleClinicListing}
        />
        <Stack.Screen
          name="singleAppointmentHistory"
          component={SingleAppointmentHistory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
