import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { Icon } from "@rneui/base";
import cImage1 from "../../assets/c1.jpeg";
import cImage2 from "../../assets/c2.webp";
import cImage3 from "../../assets/c3.jpg";
import Button from "../../Components/Button/Button";

const categoriesData = [
  "Destist",
  "Neurology",
  "Dermatology",
  "Urology",
  "Allergist",
  "Endocrinologist",
  "Hematologists",
];
const clinicsData = [
  {
    name: "Siddhi’s Clinic",
    shortAddress: "Shivaji Nagar",
    city: "Pune",
    contactNumber: 8767213959,
    ratings: 4.5,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Dermatology"]
  },
  {
    name: "Rahul Clinic",
    shortAddress: "Kothrud",
    city: "Pune",
    contactNumber: 8767213959,
    ratings: 4.8,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Mumbai",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Nagpur",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Satara",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Kolhapur",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Narayan Gaon",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Pune",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Pune",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Pune",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Neurology","Dermatology"]

  },
  {
    name: "Nisha Patil's Clinic",
    shortAddress: "Magarpatta",
    city: "Pune",
    contactNumber: 8767213959,
    ratings: 4.4,
    images: [cImage1, cImage2, cImage3],
    categoriesArray: ["Destist"]

  },
];

const ClinicListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(categoriesData);
  const [clinics, setClinics] = useState(clinicsData);

  const sortByCategory = (item) => {
      // send req to backend to sort categories
  }

  return (
    <View>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 30,
          backgroundColor: "white",
          paddingHorizontal: 20,
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <TextInput
          label="Search for Clinic"
          value={searchTerm}
          mode="outlined"
          onChangeText={(text) => setSearchTerm(text)}
          activeOutlineColor="#f3f3f3"
          outlineColor="#F3F3F3"
          theme={{ roundness: 10 }}
          left={
            <TextInput.Icon
              name="magnify"
              style={{ position: "relative", top: 5 }}
              color="rgba(51, 51, 51, 0.7)"
            />
          }
          right={
            <TextInput.Icon
              name="filter"
              style={{ position: "relative", top: 5 }}
              color="#0CBC8B"
            />
          }
          style={{
            backgroundColor: "#F3F3F3",
            height: 45,
            borderColor: "#F3F3F3",
            position: "relative",
          }}
          onSubmitEditing={() => console.log("Submitted")}
        />
      </View>
      <View
        style={{
          marginTop: 5,
          backgroundColor: "white",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: "#0CBC8B",
                  marginHorizontal: 5,
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  borderRadius: 50,
                }}
                onPress={() => sortByCategory(item)}
                key={index}
              >
                <Text style={{ color: "white", fontSize: 12 }}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 155,
        }}
      >
        {clinics
          .filter((clinic) =>
            clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) || clinic.city.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginTop: 5,
                  backgroundColor: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 17 }}>
                    {item.name},{" "}
                    <Text
                      style={{ fontSize: 11, color: "rgba(51, 51, 51, 0.9);" }}
                    >
                      {item.shortAddress + "," + item.city}
                    </Text>
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon
                      type="ionicon"
                      name="star"
                      size={14}
                      color="#0CBC8B"
                      style={{ marginRight: 5 }}
                    />
                    <Text>{item.ratings}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#0cbc8b",
                        padding: 5,
                        marginRight: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Icon
                        type="ionicon"
                        name="call"
                        color="white"
                        size={13}
                      />
                    </View>
                    <Text>{item.contactNumber}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        backgroundColor: "#0cbc8b",
                        padding: 5,
                        marginRight: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Icon
                        type="ionicon"
                        name="location"
                        color="white"
                        size={13}
                      />
                    </View>
                    <Text>{item.shortAddress + ", " + item.city}</Text>
                  </View>
                </View>
                <View style={{ marginTop: 10, flexDirection: "row" }}>
                  {item.images.map((item, index) => (
                    <Image
                      key={index}
                      source={item}
                      style={{
                        resizeMode: "contain",
                        width: 115,
                        height: 80,
                        borderRadius: 6,
                        marginHorizontal: 5,
                      }}
                    />
                  ))}
                </View>
                <View style={{ marginTop: 10 }}>
                  <Button
                    text={"Check"}
                    press="SingleClinicScreen"
                    data={item}
                  />
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default ClinicListing;
