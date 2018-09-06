import React from "react";
import { View } from "react-native";

import KButton from "./KButton";

export default class TouchPad extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flex: 10,

          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <KButton light>C</KButton>
          <KButton light>±</KButton>
          <KButton light>%</KButton>
          <KButton primary>/</KButton>
        </View>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <KButton>7</KButton>
          <KButton>8</KButton>
          <KButton>9</KButton>
          <KButton primary>×</KButton>
        </View>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <KButton>4</KButton>
          <KButton>5</KButton>
          <KButton>6</KButton>
          <KButton primary>-</KButton>
        </View>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <KButton>1</KButton>
          <KButton>2</KButton>
          <KButton>3</KButton>
          <KButton primary>+</KButton>
        </View>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <KButton wide>0</KButton>
          <KButton>.</KButton>
          <KButton primary>=</KButton>
        </View>
      </View>
    );
  }
}
