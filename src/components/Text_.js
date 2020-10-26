import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

class Text_ extends Component {
	render() {
		return (
			<Text style={styles.text}>
				{this.props.text}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		padding: "20px"
	}
});

export default Text_;

