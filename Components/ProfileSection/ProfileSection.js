import { View, Text, Image } from "react-native";
import React from "react";
import profileBackGround from "../../assets/circle-scatter-haikei.png";
import userImage from "../../assets/RahulNikamImg.jpg";

const ProfileSection = () => {
  return (
    <View>
      <View>
        <Image
          source={profileBackGround}
          style={{ width: "100%", height: 170, borderRadius: 20 }}
        />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          position: "relative",
          bottom: 40,
        }}
      >
        <Image
          source={userImage}
          style={{
            resizeMode: "contain",
            width: 80,
            height: 80,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "white",
          }}
        />
      </View>
    </View>
  );
};

export default ProfileSection;
