import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { Icon } from "@rneui/base";

const screenHeight = Dimensions.get("window").height;
const AndriodNotchHeight = StatusBar.currentHeight;

const searchData = [
  {
    clinicName: "Rahul's Clinic",
    location: "Kothrud, Pune",
  },
  {
    clinicName: "Siddhi's Clinic",
    location: "Magarpatha, Pune",
  },
  {
    clinicName: "Nisha Patil's Clinic",
    location: "Balewadi, Pune",
  },
  {
    clinicName: "The Dental Twig",
    location: "Shivaji Nagar, Pune",
  },
  {
    clinicName: "Prudent Clinics",
    location: "Wakad, Pune",
  },
  {
    clinicName: "Girme Clinic & Hospital",
    location: "Magarpatha, Pune",
  },
  {
    clinicName: "Noble Multispecialty Clinic",
    location: "FC road, Pune",
  },
  {
    clinicName: "Homeo Care Clinic",
    location: "Modern College Road, Pune",
  },
  {
    clinicName: "Prudent International Health Clinic",
    location: "Kalyani Nagar, Pune",
  },
  {
    clinicName: "Apollo Clinic",
    location: "Ganj Peth, Pune",
  },
  {
    clinicName: "I - Care Clinic",
    location: "Shivarkar Road, Pune",
  },
  {
    clinicName: "Arogya Clinic",
    location: "Raviwar peth, Pune",
  },
  {
    clinicName: "Nirmay Clinic",
    location: "Kumthekar Road, Pune",
  },
  {
    clinicName: "Health Point Polyclinic A Multi Specialty Clinic",
    location: "Kothrud, Pune",
  },
  {
    clinicName: "Express Clinics Kalyani Nagar",
    location: "Kalyani Nagar, Pune",
  },
];

const SearchScreen = () => {
  const [clinicName, setClinicName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [searchResult, setSearchResult] = useState(searchData);

  const getclinicName = (text) => {
    setClinicName(text);
  };

  const getLocation = (text) => {
    setLocationName(text);
    setSearchResult(
      searchData.filter((clinic) =>
        clinic.location.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={{ height: screenHeight + AndriodNotchHeight }}>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "white",
          paddingHorizontal: 20,
        }}
      >
        <TextInput
          label="Clini name"
          value={clinicName}
          mode="outlined"
          onChangeText={getclinicName}
          activeOutlineColor="#F3F3F3"
          outlineColor="#F3F3F3"
          theme={{ roundness: 10 }}
          left={<TextInput.Icon style={{ position: "relative", top: 5 }} name="magnify" color="rgba(51, 51, 51, 0.7)" />}
          style={{
            backgroundColor: "#F3F3F3",
            height: 45,
            borderColor: "#F3F3F3",
          }}
        />
        <TextInput
          label="Location"
          value={locationName}
          mode="outlined"
          onChangeText={getLocation}
          activeOutlineColor="#F3F3F3"
          outlineColor="#F3F3F3"
          theme={{ roundness: 10 }}
          left={
            <TextInput.Icon style={{ position: "relative", top: 5 }} name="map-marker" color="rgba(51, 51, 51, 0.7)" />
          }
          style={{
            backgroundColor: "#F3F3F3",
            height: 45,
            borderColor: "#F3F3F3",
            marginTop: 0,
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 5,
            paddingVertical: 10,
          }}
        >
          {searchResult
            .filter((clinic) =>
              clinic.clinicName.toLowerCase().includes(clinicName.toLowerCase())
            )
            .map((item, index) => {
              return (
                <TouchableOpacity key={index} style={{ marginVertical: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginHorizontal: 25,
                      // borderBottomColor: "rgba(51, 51, 51, 0.65)",
                      // borderBottomWidth: 1,
                      paddingBottom: 5,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {/* <Icon
                        type="ionicon"
                        name="search-outline"
                        size={23}
                        style={{ marginRight: 5 }}
                      ></Icon> */}
                      <Text style={{ fontSize: 16, width: "90%" }}>
                        {item.clinicName.length > 23
                          ? item.clinicName.substring(0, 23) + "... "
                          : item.clinicName}
                        ,{" "}
                        <Text
                          style={{
                            fontSize: 12,
                            color: "rgba(51, 51, 51, 0.65)",
                          }}
                        >
                          {item.location}
                        </Text>
                      </Text>
                    </View>
                    <View>
                      <Icon
                        type="ionicon"
                        name="chevron-forward-outline"
                      ></Icon>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
