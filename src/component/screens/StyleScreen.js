"use strict";
import React, { Component } from "react";

import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

export default class StyleScreen extends Component {
  static navigationOptions = {
    title: "Style Screen"
  };

  openStyleScreen = () => {
    this.props.navigation.navigate("Design");
  };
  render() {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.viewStyleOne}>
            <Text style={styles.textStyle}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewStyleOne}>
            <Text style={styles.textStyle}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewStyleOne}>
            <Text style={styles.textStyle}> 1 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white"
  },
  viewStyleOne: {
    width: 40,
    height: 40,
    padding: 10,
    margin: 5,
    borderRadius:5,
    minWidth:60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  textStyle: {
    textAlign: "center"
  }
});
