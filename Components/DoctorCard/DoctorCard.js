import { View, Text, Image } from 'react-native'
import React from 'react'

const DoctorCard = ({image, name, specs }) => {
  return (
    <View style={{marginTop: 20, flexDirection: "row", alignItems: "center", }}>
      <Image source={image} style={{width: 50, height: 50, resizeMode: "contain", borderRadius: 50, marginRight: 10}}/>
      <View>
        <Text style={{fontSize: 16}}>Dr. {name}</Text>
        <Text style={{color: "rgba(51, 51, 51, 0.6)"}}>{specs}</Text>
      </View>
    </View>
  )
}

export default DoctorCard