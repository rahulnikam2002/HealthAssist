import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Keyboard,
} from "react-native";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { Icon } from "@rneui/themed";
import userImage from "../../assets/RahulNikamImg.jpg";
import Categories from "../../Components/Caterogies/Categories";
import CallToAction from "../../Components/CallToAction/CallToAction";
import locationImage from "../../assets/placeholder.png";
import * as SecureStore from "expo-secure-store";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { hostip } from "../../env/const";
import { getUserInfo } from "../../functions/userInfo";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { TextInput } from "react-native-paper";

const AndriodNotchHeight = StatusBar.currentHeight;
const screenHeight = Dimensions.get("screen").height;

const HomeScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();
  const isFocused = useIsFocused();
  const [enableScroll, setEnableScroll] = useState(true);
  const [bsIndex, setBSIndex] = useState(-1);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  console.log(isKeyboardVisible);
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["52%", "55%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index == -1) {
      setEnableScroll(true);
      setBSIndex(-1);
    } else {
      setEnableScroll(false);
    }
  }, []);

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} opacity={0} />,
    []
  );

  useEffect(() => {
    getUserInfo(setUserInfo);
  }, [isFocused]);

  //Functions
  const handleChangeUserLocation = () => {
    setShowLoader(true)
  }

  return (
    <ScrollView
      scrollEnabled={enableScroll}
      style={{
        backgroundColor: "white",
        height: screenHeight,
      }}
    >
      <View
        style={{
          backgroundColor: !enableScroll
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(0, 0, 0, 0.0)",
          padding: 24,
          position: "absolute",
          width: "100%",
          bottom: isKeyboardVisible ? 150 : 0,
          zIndex: 10,
          height: enableScroll ? "0%" : screenHeight,
        }}
      >
        <BottomSheet
          style={{ marginTop: isKeyboardVisible ? null : 100 }}
          ref={bottomSheetRef}
          index={bsIndex}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose
          backdropComponent={renderBackdrop}
          detached={true}
          enableOverDrag
        >
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 16 }}>Address</Text>

            <View
              style={{
                paddingTop: 10,
                paddingBottom: 20,
                backgroundColor: "white",
                paddingHorizontal: 0,
              }}
            >
              <TextInput
                label="City"
                value={newCity}
                onChangeText={(text) => setNewCity(text)}
                mode="outlined"
                activeOutlineColor="#F3F3F3"
                outlineColor="#F3F3F3"
                theme={{ roundness: 10 }}
                style={{
                  backgroundColor: "#F3F3F3",
                  height: 45,
                  borderColor: "#F3F3F3",
                }}
              />
              <TextInput
                label="State"
                value={newCity}
                onChangeText={(text) => setNewCity(text)}
                mode="outlined"
                activeOutlineColor="#F3F3F3"
                outlineColor="#F3F3F3"
                theme={{ roundness: 10 }}
                style={{
                  backgroundColor: "#F3F3F3",
                  height: 45,
                  borderColor: "#F3F3F3",
                }}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: "#0CBC8B",
                  padding: 12,
                  borderRadius: 10,
                  marginTop: 10
                }}
                onPress={handleChangeUserLocation}
              >
                {showLoader ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Update
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </View>
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
              Hello,{" "}
              {userInfo ? (
                userInfo.userName.split(" ")[0]
              ) : (
                <ActivityIndicator size={"small"} color="#0CBC8B" />
              )}{" "}
              ❤️
            </Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => setBSIndex(1)}
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
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
    </ScrollView>
  );
};

export default HomeScreen;
