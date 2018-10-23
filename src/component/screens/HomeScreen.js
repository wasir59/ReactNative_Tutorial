'use strict'
import React, { Component } from "react";
import { Text, View, Alert, StyleSheet, TouchableOpacity } from "react-native";
import StartAndroidActivity from "../bridge/JsBridge";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "HomeScreen"
  };
  state = {
    myState: "Hello There."
  };
  updateState = () => {
    this.setState({ myState: "The state is updated" });
  };
  openStyleScreen = () => {
    // Alert.alert("You need to...");
    this.props.navigation.navigate('Design');
  };
  openAndroidActivity = () => {
    StartAndroidActivity.openActivity('title');
  };
  render() {
    return (
      
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.viewStyleOne} onPress = {this.openAndroidActivity}>
              <Text style={styles.textStyle}> Open Android Activity </Text>
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
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white"
  },
  viewStyleOne: {
    height: 40,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  },
  textStyle: {
    color:'white',
    textAlign: "center"
  }
});
