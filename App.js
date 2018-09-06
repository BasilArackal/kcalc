import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TouchPad from "./components/UI/TouchPad";
import Screen from "./components/UI/Screen";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Screen />
        <TouchPad />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  }
});
