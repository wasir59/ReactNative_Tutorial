import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from '../presentercomponet/PresentationalComponent'
import ButtonList from '../presentercomponet/ButtonList';
import CustomButton from '../custom_ui/CustomButton';


export default class App extends React.Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
    return (
      <ButtonList></ButtonList>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });