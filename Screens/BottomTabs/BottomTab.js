import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/Home";
import { Icon } from "@rneui/base";
import profileImage from "../../assets/RahulNikamImg.jpg";
import SearchScreen from "../Search/Search";
import AppointmentHistoryScreen from "../AppointmentHistory/AppointmentHistoryScreen";
import ProfileScreen from "../Profile/Profile";
import ClinicListing from "../Listing/ClinicListing";


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingBottom: 0, paddingTop: 10, height: 70 },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="home"
                type="ionicon"
                color={focused ? "#0CBC8B" : "rgba(51, 51, 51, 0.7)"}
                size={focused ? 30 : 25}
              />
            );
          },
          tabBarLabel: "",
          
        }}
      />
      <Tab.Screen

        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="search"
                type="ionicon"
                color={focused ? "#0CBC8B" : "rgba(51, 51, 51, 0.7)"}
                size={focused ? 30 : 25}
              />
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="clinicsListingScreen"
        component={ClinicListing}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="clipboard-outline"
                type="ionicon"
                color={focused ? "#0CBC8B" : "rgba(51, 51, 51, 0.7)"}
                size={focused ? 30 : 25}
              />
            );
          },
          tabBarLabel: "",
          tabBarActiveTintColor: "#0CBC8B",
        }}
      />
      <Tab.Screen
        name="AppointmentHistoryScreen"
        component={AppointmentHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="bookmark"
                type="ionicon"
                color={focused ? "#0CBC8B" : "rgba(51, 51, 51, 0.7)"}
                size={focused ? 30 : 25}
              />
            );
          },
          tabBarLabel: "",
          tabBarActiveTintColor: "#0CBC8B",
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={profileImage}
                style={focused ? {
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                  resizeMode: "contain",
                  borderColor: "#0CBC8B",
                  borderWidth: 2
                } : {
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    resizeMode: "contain",
                  }}
              />
            );
          },
          tabBarLabel: "",

        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;


