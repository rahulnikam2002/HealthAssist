import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import featuredImage from "../../assets/c1.jpeg";
import { Icon } from "@rneui/base";
import { makeShareable } from "react-native-reanimated/lib/reanimated2/core";
import Button from "../../Components/Button/Button";
import AboutImage from "../../assets/about.png";
import InfoImage from "../../assets/report.png";
import hospitalBed from "../../assets/hospital-bed.png";
import hospitalType from "../../assets/medicine.png";
import cImage1 from "../../assets/c1.jpeg";
import cImage2 from "../../assets/c2.webp";
import cImage3 from "../../assets/c3.jpg";
import imageCameraIcon from "../../assets/upload.png";
import ImageView from "react-native-image-viewing";
import DoctorCard from "../../Components/DoctorCard/DoctorCard";
import profileImage from "../../assets/RahulNikamImg.jpg";
import siddhisImage from '../../assets/s1.jpeg'
import nishasImage from '../../assets/n1.jpeg'
import doctorIcon from '../../assets/doctor.png'

const images = [cImage1, cImage2, cImage3];

const doctors = [
  {
    name: "Rahul Nikam",
    specs: "Cardiologiest",
    image: profileImage,
  },
  {
    name: "Siddhi Mahadik",
    specs: "Cardiologiest",
    image: siddhisImage,
  },
  {
    name: "Nisha Patil",
    specs: "Cardiologiest",
    image: nishasImage,
  },
];

const SingleClinicListing = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [visible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [doctorsList, setDoctorsList] = useState(doctors);
  console.log(data);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ position: "relative" }}>
        <Image
          source={featuredImage}
          style={{ width: "100%", height: 350, resizeMode: "cover" }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            opacity: 0.5,
            position: "absolute",
            top: 25,
            left: 25,
            padding: 5,
            borderRadius: 7,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon type="ionicon" name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 20,
          position: "relative",
          // bottom: 15,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          paddingHorizontal: 20,
          zIndex: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, width: "80%" }}>
            {data.name},
            <Text style={{ fontSize: 14, color: "rgba(51, 51, 51, 0.6)" }}>
              {" "}
              {data.city}
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
            <Text>{data.ratings}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            marginVertical: 10,
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
            <Icon type="ionicon" name="call" color="white" size={13} />
          </View>
          <Text style={{ color: "rgba(51, 51, 51, 0.6)" }}>
            {data.contactNumber}
          </Text>
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
            <Icon type="ionicon" name="location" color="white" size={13} />
          </View>
          <Text style={{ color: "rgba(51, 51, 51, 0.6)" }}>
            Block no 2, Eon Kothrud road, Shivaji Nagar, Pune
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
        }}
      ></View>
      {/* Section 2 */}
      <View
        style={{
          backgroundColor: "white",
          marginTop: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 16 }}>Charges Starts from</Text>
          <Text
            style={{
              fontSize: 12,
              color: "rgba(51, 51, 51, 0.6)",
              marginTop: 5,
            }}
          >
            Starting charges, amount can be greater than of which shown
            here.
          </Text>
        </View>
        <View>
          <Text>
            ₹ <Text style={{ fontSize: 20 }}>250</Text>
          </Text>
        </View>
      </View>

      {/* Section 3 */}
      <View
        style={{
          backgroundColor: "white",
          marginTop: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(229, 229, 229, 0.7);",
            padding: 8,
            borderRadius: 5,
            width: "48%",
          }}
        >
          <Text style={{ textAlign: "center", color: "rgba(51, 51, 51, 0.6)" }}>
            Make a Call
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#0cbc8b",
            padding: 8,
            borderRadius: 5,
            width: "48%",
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "white",
          marginTop: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "space-between"
        }}
      >
        <Image source={AboutImage} style={{ width: 40, height: 40 }} />
        <View style={{ marginLeft: 10, width: "90%" }}>
          <Text style={{ fontSize: 16 }}>About</Text>
          <Text
            style={{
              fontSize: 13,
              color: "rgba(51, 51, 51, 0.6)",
              marginTop: 5,
            }}
          >
            Aditya Birla Memorial Hospital is a multi-specialty quaternary care
            hospital located at Pimpri-Chinchwad, Pune in the western Indian
            state of Maharashtra.
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          marginTop: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "space-between"
        }}
      >
        <Image source={InfoImage} style={{ width: 40, height: 40 }} />
        <View style={{ marginLeft: 10, width: "90%" }}>
          <Text style={{ fontSize: 16 }}>Details</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={hospitalBed} style={{ width: 30, height: 30 }} />
              <Text style={{ marginLeft: 5 }}>Currently 8 beds availavle</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <Image source={hospitalType} style={{ width: 30, height: 30 }} />
              <Text style={{ marginLeft: 5 }}>OPD</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          marginTop: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "space-between"
        }}
      >
        <Image source={imageCameraIcon} style={{ width: 40, height: 40 }} />
        <View style={{ marginLeft: 10, width: "90%" }}>
          <Text style={{ fontSize: 16 }}>Images</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}></View>
          <View style={{ marginTop: 20, flexDirection: "row" }}>
            {images.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setIsVisible(true);
                  setImageIndex(index);
                }}
              >
                <Image
                  source={item}
                  style={{
                    resizeMode: "contain",
                    width: 100,
                    height: 80,
                    borderRadius: 6,
                    marginHorizontal: 5,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <ImageView
            images={images}
            imageIndex={imageIndex}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
            swipeToCloseEnabled={true}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 5,
          marginBottom: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "space-between"
        }}
      >
        <Image source={doctorIcon} style={{ width: 40, height: 40 }} />
        <View style={{ marginLeft: 10, width: "90%" }}>
          <Text style={{ fontSize: 16 }}>Doctor</Text>
          {doctorsList.map((item, index) => (
            <DoctorCard
              key={index}
              image={item.image}
              name={item.name}
              specs={item.specs}
            />
          ))}
          <TouchableOpacity
            style={{
              backgroundColor: "#0cbc8b",
              padding: 8,
              borderRadius: 5,
              width: "100%",
              marginTop: 20
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              View all 8 doctors
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleClinicListing;