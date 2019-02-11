
/*  eslint-disable */
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity>
              <Text style={styles.text}>click me</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text:{
    color: 'red'
  }
});
