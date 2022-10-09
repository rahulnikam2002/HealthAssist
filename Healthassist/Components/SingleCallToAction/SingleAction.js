import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import appointmentCancellationImage from "../../assets/delete.png";
import bookAppointmentImage from "../../assets/meeting.png";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const SingleAction = ({ image, title, meta, press }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${press}`)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={image} style={{ width: 50, height: 50 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 15 }}>{title}</Text>
          <Text style={{ fontSize: 10, color: "rgba(51, 51, 51, 0.7)" }}>
            {meta}
          </Text>
        </View>
      </View>
      <View>
        <Icon type="ionicon" name="chevron-forward-outline" />
      </View>
    </TouchableOpacity>
  );
};

export default SingleAction;
