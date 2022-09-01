import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// Images
import Cardiology from "../../assets/heart.png";
import Dermatology from "../../assets/skin.png";
import Neurology from "../../assets/brain.png";
import Dentist from "../../assets/dentistry.png";
import Allergist from "../../assets/allergist.png";
import Endocrinologist from "../../assets/endocrinologist.png";
import Hematologists from "../../assets/hematologists.png";
import ShowMoreIcon from "../../assets/showmore.png";

const categoriesData = [
  {
    name: "Cardiology",
    icon: Cardiology,
    screen: "CardiologyFilter",
  },
  {
    name: "Dermatology",
    icon: Dermatology,
    screen: "DermatologyFilter",
  },
  {
    name: "Neurology",
    icon: Neurology,
    screen: "NeurologyFilter",
  },
  {
    name: "Dentist",
    icon: Dentist,
    screen: "DentistFilter",
  },
  {
    name: "Allergist",
    icon: Allergist,
    screen: "AllergistFilter",
  },
  {
    name: "Endocrinologist",
    icon: Endocrinologist,
    screen: "EndocrinologistFilter",
  },
  {
    name: "Hematologists",
    icon: Hematologists,
    screen: "HematologistsFilter",
  },
  {
    name: "Show More",
    icon: ShowMoreIcon,
    screen: "ShowMoreIconFilter",
  },
];

const Categories = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18 }}>Categories</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%", marginTop: 10 }}>
        {categoriesData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: index == 7 ? "58%" : "26%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
                marginHorizontal: 10,
                backgroundColor: "white",
                shadowOffset: { width: 40, height: 40 },
                shadowColor: "black",
                shadowOpacity: 0.4,
                elevation: 2,
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 10
              }}
            >
              <Image source={item.icon} style={{ width: 40, height: 40 }} />
              <Text
                style={{ textAlign: "center", fontSize: 10, paddingTop: 5 }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Categories;
