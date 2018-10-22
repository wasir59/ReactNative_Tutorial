import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class CustomButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
			<View style = {styles.view_row}>
 				<TouchableOpacity style={styles.buttonStyle}>
					 <Text style={styles.textStyle}>{text}</Text>
		 	 </TouchableOpacity>
				<TouchableOpacity style={styles.buttonStyle}>
					 <Text style={styles.textStyle}>{text}</Text>
		 	 </TouchableOpacity>
			</View>
		);
	}
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	view_row: {
		position: 'absolute',
		flexWrap: 'wrap',
		alignSelf: 'baseline',
		flexDirection: 'row'
  },
  textStyle: {
    fontSize:20,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:10,
	backgroundColor: '#202646',
	borderRadius:5
  }
});

export default CustomButton;