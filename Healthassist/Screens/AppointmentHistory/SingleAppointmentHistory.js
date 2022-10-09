import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { makeShareable } from "react-native-reanimated/lib/reanimated2/core";
import Button from "../../Components/Button/Button";

const SingleAppointmentHistory = ({ route, goBack }) => {
  const [appointmentCompleted, setAppointmentCompleted] = useState(false);
  const [userReviewed, setUserReviewed] = useState(false);
  const navigation = useNavigation();
  const { data } = route.params;
  return (
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            color={"black"}
            size={30}
            type="ionicon"
            name="chevron-back-outline"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 5,
            color: "black",
            fontWeight: "600",
          }}
        >
          Details
        </Text>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
            // borderBottomColor: "#e3e3e3",
            // borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              style={{
                backgroundColor: "#0CBC8B",
                borderRadius: 50,
                padding: 2,
                marginRight: 5,
              }}
              color="white"
              type="ionicon"
              name="checkmark-outline"
            />
            <Text>Checked</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              style={
                appointmentCompleted
                  ? {
                      backgroundColor: "#0CBC8B",
                      borderRadius: 50,
                      padding: 2,
                      marginRight: 5,
                    }
                  : {
                      backgroundColor: "#000",
                      borderRadius: 50,
                      padding: 2,
                      marginRight: 5,
                    }
              }
              color="white"
              type="ionicon"
              name="checkmark-outline"
            />
            <Text>completed</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              style={
                userReviewed
                  ? {
                      backgroundColor: "#0CBC8B",
                      borderRadius: 50,
                      padding: 2,
                      marginRight: 5,
                    }
                  : {
                      backgroundColor: "#000",
                      borderRadius: 50,
                      padding: 2,
                      marginRight: 5,
                    }
              }
              color="white"
              type="ionicon"
              name="checkmark-outline"
            />
            <Text>Review</Text>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
            Details of your appointment at {data.clinicName}
          </Text>
          <Text style={{ color: "rgba(51, 51, 51, 0.7)" }}>
            This are the details for your appointpoint, you can cancel your
            appointment anytime.
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            borderColor: "#e3e3e3",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Clinic's Address
          </Text>
          <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
            {data.address}
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            borderColor: "#e3e3e3",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Clinic's Summary
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
              Clinic Name
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14 }}>
              {data.clinicName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
              Treatment for
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14 }}>
              {data.treatmentFor}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
              Payment mode
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14 }}>{data.payment}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
              Date
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14 }}>
              {data.appointmentDate}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
              Time
            </Text>
            <Text style={{ marginTop: 10, fontSize: 14 }}>
              {data.appointmentTime}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            borderColor: "#e3e3e3",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Payment</Text>
          <Text style={{ marginTop: 10, color: "rgba(51, 51, 51, 0.7)" }}>
            Due to some terms and conditions till the date we support offline
            payments only, you can pay directly to the clinics owner once you
            compelete your appointment.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 10,
            backgroundColor: "#0CBC8B",
            borderRadius: 5,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Cancel Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleAppointmentHistory;
