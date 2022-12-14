import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import ProfileSection from "../../Components/ProfileSection/ProfileSection";
import { Icon } from "@rneui/themed";
import Button from "../../Components/Button/Button";
import appointmentCancellationImage from "../../assets/delete.png";
import bookAppointmentImage from "../../assets/meeting.png";
import clinicLogo from "../../assets/hospital.png";
import moreLogo from "../../assets/more.png";
import SingleAction from "../../Components/SingleCallToAction/SingleAction";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native"
import { getUserInfo } from "../../functions/userInfo";
import { useIsFocused } from "@react-navigation/native";

const ProfileActionData = [
  {
    img: bookAppointmentImage,
    title: "Book an Appointment",
    meta: "Find a Clinic",
    screen: "",
  },
  {
    img: appointmentCancellationImage,
    title: "Request Cancellation",
    meta: "Cancel your ongoing appointment",
    screen: "",
  },
  {
    img: clinicLogo,
    title: "Switch to Clinic",
    meta: "Register your clinic on this app",
    screen: "",
  },
  {
    img: moreLogo,
    title: "More Options",
    meta: "Change password, Logout & more",
    screen: "ProfileMoreOptions",
  },
];

const ProfileScreen = () => {
  const [actionData, setActionData] = useState(ProfileActionData);
  const [userInfo, setUserInfo] = useState();

  const isFocused = useIsFocused()

  useEffect(() => {
    getUserInfo(setUserInfo)
  },[isFocused])

  const navigation = useNavigation();
  const logout = async () => {
    await SecureStore.deleteItemAsync("authToken")
    navigation.navigate("onBoardingScreen")
  }
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: "white",
        paddingBottom: 200
      }}
    >
      <ProfileSection />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          bottom: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
        {userInfo ? userInfo.userName : <ActivityIndicator size={"small"} color="#0CBC8B" />}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              size={18}
              style={{ marginRight: 3 }}
              color={"rgba(51, 51, 51, 0.7);"}
              type="ionicon"
              name="location-outline"
            />
            <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
              Pune, Maharashtra
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 15,
            }}
          >
            <Icon
              size={18}
              style={{ marginRight: 3 }}
              color={"rgba(51, 51, 51, 0.7);"}
              type="ionicon"
              name="person-outline"
            />
            <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>Age: 20</Text>
          </View>
        </View>
      </View>
      <Button text={"Edit Profile"} />

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "black",
          }}
        >
          Hey, {userInfo ? userInfo.userName.split(" ")[0] : <ActivityIndicator size={"small"} color="#0CBC8B" />}
        </Text>
        <Text style={{ fontSize: 13, color: "rgba(51, 51, 51, 0.7);" }}>
          What do you want to to today?
        </Text>
        <View style={{ marginTop: 20 }}>
          {actionData.map((item, index) => {
            return (
              <SingleAction
                key={index}
                image={item.img}
                title={item.title}
                meta={item.meta}
                press={item.screen}
              />
            );
          })}
        </View>
      </View>
      <View>
        <Text onPress={() => logout()}>Logout</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
