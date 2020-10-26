import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class SomeButton extends Component {
	state = {
		'😃': '😃 Smiley',
		'🚀': '🚀 Rocket',
		'⚛️': '⚛️ Atom Symbol'
	};

	render() {
		return (
			<Button
				style={styles.button}
				onPress={() => {
					alert('You tapped the button!');
				}}
				title="Press Me"
			/>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		
	}
});

export default SomeButton;

