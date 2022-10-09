import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Button = ({ text, press, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${press}`, data ? {data: data} : null)}
      style={{
        backgroundColor: "#0CBC8B",
        padding: 8,
        borderRadius: 5,
      }}
    >
      <Text style={{textAlign: "center", color: "white", fontSize: 15}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;