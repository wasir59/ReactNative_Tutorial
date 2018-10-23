import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomButton extends Component {
	render() {
		const { text,onPress} = this.props;
		return (
			<View style = {styles.view_row}>
 				<TouchableOpacity style={styles.buttonStyle} onPress = {() => onPress()}>
					 <Text style={styles.textStyle}>{text}</Text>
		 	 </TouchableOpacity>
			</View>
		);
	}
}

CustomButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	view_row: {
		position: 'absolute',
		flexWrap: 'wrap',
		alignSelf: 'baseline',
		flexDirection: 'row'
  },
  textStyle: {
  fontSize:13,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
		backgroundColor: "blue",
		paddingLeft: 20,
		marginTop:10,
		paddingRight:20,
		paddingTop:5,
		paddingBottom:10,
		borderRadius: 10
  }
});

export default CustomButton;