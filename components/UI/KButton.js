import React from "react";

import { TouchableOpacity, Text, View } from "react-native";

export default class Kbutton extends React.Component {
  render() {
    let FGColor = "#FFF";
    let bGColor = "#333333";
    let multiplyFactor = 1;
    let tAlign = "center";

    if (this.props.primary) bGColor = "#FB9337";
    else if (this.props.light) {
      FGColor = "#000";
      bGColor = "#A6A6A6";
    }

    if (this.props.wide) {
      multiplyFactor = 2;
      tAlign = "left";
    }

    return (
      <View
        style={{
          flex: 1 * multiplyFactor,
          alignItems: "center",
          justifyContent: "center",

          margin: 5
        }}
      >
        <TouchableOpacity
          style={{
            width: 70 * multiplyFactor,
            height: 70,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: bGColor
          }}
        >
          <Text
            style={{
              width: 50 * multiplyFactor,
              alignItems: "center",
              justifyContent: "center",
              color: FGColor,
              fontSize: 40,
              textAlign: tAlign
            }}
          >
            {this.props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
