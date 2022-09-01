import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const AppointmentCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, idx) => (
          <TouchableOpacity onPress={() => navigation.navigate("singleAppointmentHistory", {data: item})}
            key={idx}
            style={{
              width: "100%",
              padding: 10,
              borderBottomColor: "#f5f5f5",
              borderBottomWidth: 5,
            }}
          >
            <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
              Appointment date
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
                borderBottomColor: "#f5f5f5",
                borderBottomWidth: 1,
                paddingBottom: 5,
              }}
            >
              <Icon
                name="time-outline"
                type="ionicon"
                style={{ marginRight: 5 }}
              />
              <Text>
                {item.appointmentDate + "  ‣  " + item.appointmentTime}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={item.clinicImg}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  {item.clinicName}
                </Text>
                <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
                  {item.treatmentFor}
                </Text>
              </View>
              <TouchableOpacity
                style={{ position: "absolute", right: 10 }}
                onPress={() => navigation.navigate("singleAppointmentHistory", {data: item})}
              >
                <Icon type="ionicon" name="chevron-forward-outline" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AppointmentCard;
