import React from "react";
import { View, Text } from "react-native";
import MyHeader from "../components/MyHeader";
const DetailScreen = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Detail" />
      <Text>This is the Details Screen</Text>
    </View>
  );
};
export default DetailScreen;