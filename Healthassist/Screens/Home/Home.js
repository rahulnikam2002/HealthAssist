import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import userImage from "../../assets/RahulNikamImg.jpg";
import Categories from "../../Components/Caterogies/Categories";
import CallToAction from "../../Components/CallToAction/CallToAction";
import locationImage from "../../assets/placeholder.png";
import SecureStore from "expo-secure-store";

const AndriodNotchHeight = StatusBar.currentHeight;
const screenHeight = Dimensions.get("screen").height;

const HomeScreen = ({ navigation }) => {
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "white",
        height: screenHeight,
        paddingTop: AndriodNotchHeight,
        paddingHorizontal: 20,
      }}
    >
      <StatusBar backgroundColor="#0CBC8B" />

      {/* Header Area */}
      <View
        style={{
          marginTop: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: "600" }}>
            Hello, Rahul ❤️
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ color: "rgba(15, 16, 17, 0.5)", fontSize: 12 }}>
              Pune, Maharashtra
            </Text>
            <Icon
              color="rgba(15, 16, 17, 0.5)"
              type="ionicon"
              size={20}
              name="chevron-down-outline"
            ></Icon>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            source={userImage}
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* Search Box Area */}
      <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
        <View
          style={{
            height: 45,
            width: "100%",
            backgroundColor: "#f3f3f3",
            marginTop: 20,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Icon type="ionicon" name="search-outline" size={23}></Icon>
          <Text style={{ marginLeft: 10 }}>Search for clinic</Text>
        </View>
      </TouchableOpacity>
      <Categories />
      <CallToAction />
      <View
        style={{
          marginTop: 30,
          marginBottom: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: "47%",
            backgroundColor: "rgba(27, 156, 252, 0.15)",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Image
            source={locationImage}
            style={{ width: 45, height: 45, marginBottom: 10 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(51, 51, 51, 0.9);",
            }}
          >
            You’re in Pune!
          </Text>
          <Text style={{ fontSize: 11, color: "rgba(51, 51, 51, 0.6);" }}>
            Find the best clinics around you in pune.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "47%",
            backgroundColor: "rgba(85, 230, 193, 0.15)",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Image
            source={userImage}
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "rgba(51, 51, 51, 0.9);",
            }}
          >
            Great Profile!
          </Text>
          <Text style={{ fontSize: 11, color: "rgba(51, 51, 51, 0.6);" }}>
            Still you can edit your personal info.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
