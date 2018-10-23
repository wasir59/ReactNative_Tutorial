import React, { Component } from "react";
import { Text, View, Alert,StyleSheet } from "react-native";
import CustomButton from "../custom_ui/CustomButton";
import StyleScreen from "./StyleScreen";

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
  render() {
    return (
      <View>
      <CustomButton text = 'Style' onPress = {this.openStyleScreen}></CustomButton>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerRow: {
    flex:1,
    flexDirection:'column',
     justifyContent:'flex-start', 
     alignItems:'center'
  }
})
