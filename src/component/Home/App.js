import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import {
  createStackNavigator,
} from 'react-navigation';
import StyleScreen from '../screens/StyleScreen';


const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Design: {screen:StyleScreen},
});
export default App;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });