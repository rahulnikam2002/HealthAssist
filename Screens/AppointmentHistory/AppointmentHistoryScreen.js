import { View, Image, Dimensions } from "react-native";
import React from "react";
import { Tab, Text, TabView } from "@rneui/themed";
import emptyDataImg from "../../assets/emptyData.gif"
import clinicImg from '../../assets/c3.jpg'

//Components
import AppointmentCard from "../../Components/AppointmentCard/AppointmentCard";

const upComingAppointmentsData = [
  {
    clinicName: "Siddhi's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  },
  {
    clinicName: "Rahul Nikam's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  },
  {
    clinicName: "Nisha Patil's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  },
  {
    clinicName: "Siddhi's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  },
  {
    clinicName: "Siddhi's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  },
  {
    clinicName: "Siddhi's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  },
  {
    clinicName: "Siddhi's Clinic",
    address: "block no 7, Shivaji Nagar, Pune, Maharashtra",
    appointmentDate: "30th Jun 20",
    appointmentTime: "8:00 - 9:00 AM",
    payment: "offline",
    clinicImg: clinicImg,
    treatmentFor: "Dentist"
  }
];

const pastAppointmentsData = [
  
];
const screenHeight = Dimensions.get("screen").height;

const AppointmentHistoryScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [appointments, setAppointments] = React.useState(upComingAppointmentsData);
  const [pastAppointments, setPastAppointments] = React.useState(pastAppointmentsData);
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#0CBC8B",
          height: 1,
        }}
      >
        <Tab.Item
          title="Upcoming"
          titleStyle={{ fontSize: 15 }}
          containerStyle={() => ({
            backgroundColor: "white",
          })}
        />
        <Tab.Item
          title="Past"
          titleStyle={{ fontSize: 15 }}
          containerStyle={(active) => ({
            backgroundColor: "white",
          })}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{
            backgroundColor: "white",
            width: "100%",
            // paddingHorizontal: 20,
          }}
        >
          <View>
            {appointments.length > 0 ? (
              <View>
                <AppointmentCard data={appointments} />
              </View>
            ) : (
              <NoAppointmentsScreen screen="upComing" />
            )}
          </View>
        </TabView.Item>
        <TabView.Item
          style={{
            backgroundColor: "white",
            width: "100%",
            // paddingHorizontal: 20,
          }}
        >
          <View>
            {pastAppointments.length > 0 ? (
              <View>
                <AppointmentCard  />
              </View>
            ) : (
              <NoAppointmentsScreen screen="pastAppointment" />
            )}
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
};

const NoAppointmentsScreen = ({screen}) => {
  return (
    <View style={{height: screenHeight-300, flexDirection: "column", alignItems: "center", justifyContent:"center" }}>
      <Image source={emptyDataImg} style={{width: 200, height: 300, resizeMode: "contain"}} />
      {
        screen == "upComing" ? <Text>There is no Upcoming Appointment!</Text> : <Text>There is no past Appointment!</Text>
      }
    </View>
  );
};

export default AppointmentHistoryScreen;
