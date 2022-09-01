import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import appointmentCancellationImage from "../../assets/delete.png";
import bookAppointmentImage from "../../assets/meeting.png";
import { Icon } from "@rneui/themed";
import SingleAction from "../SingleCallToAction/SingleAction";
import { useState } from "react";

const HomeActionData = [
  {
    img: bookAppointmentImage,
    title: "Book an Appointment",
    meta: "Find a Clinic",
    screen: ""
  },
  {
    img: appointmentCancellationImage,
    title: "Request Cancellation",
    meta: "Cancel your ongoing appointment",
    screen: ""
  },
];

const CallToAction = () => {
  const [actionData, setActionData] = useState(HomeActionData);
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Actions</Text>
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
  );
};

export default CallToAction;
