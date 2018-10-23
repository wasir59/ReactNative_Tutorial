"use strict";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import CustomButton from "../custom_ui/CustomButton";

const ButtonList = props => {
  return (
    <View style={styles.container}>
      <CustomButton
        text="Click Me"
        onPress={() => {
          alert("Hi there!!!");
        }}
      />
    </View>
  );
};

export default ButtonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    height: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC"
  }
});
