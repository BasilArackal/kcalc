import React from "react";
import { View, Text } from "react-native";

export default class Screen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 4,

          justifyContent: "flex-end"
        }}
      >
        <Text style={{ color: "#fff", fontSize: 120, textAlign: "right" }}>
          0
        </Text>
      </View>
    );
  }
}
