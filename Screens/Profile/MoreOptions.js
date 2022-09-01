import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";

//Images
import changePasswordImage from "../../assets/changePassword.png";
import logoutImage from "../../assets/logout.png";
import deleteAccountImage from "../../assets/accountDelete.png";

//components
import SingleAction from "../../Components/SingleCallToAction/SingleAction";

const ScreenSize = Dimensions.get("screen").height;

const ProfileMoreActionData = [
  {
    img: changePasswordImage,
    title: "Change Password",
    meta: "You can change password, add new one",
    screen: "ChangePassword",
  },
  {
    img: logoutImage,
    title: "Request Cancellation",
    meta: "Cancel your ongoing appointment",
    screen: "",
  },
  {
    img: deleteAccountImage,
    title: "Delete Account",
    meta: "You can login to HealthAssist anytime",
    screen: "",
  },
];

const ProfileMoreOptions = ({navigation: {goBack}}) => {
  const [profileMoreAction, setProfileMoreAction] = useState(
    ProfileMoreActionData
  );
  return (
    <View
      style={{
        backgroundColor: "white",
        height: ScreenSize,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={()=> goBack()}>
          <Icon color={"black"} size={30} type="ionicon" name="chevron-back-outline" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, marginLeft: 5, color: "black" }}>More Options</Text>
      </View>
      <View style={{marginTop: 30}}>
        {profileMoreAction.map((item, index) => {
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
  );
};

export default ProfileMoreOptions;
