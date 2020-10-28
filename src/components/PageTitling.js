import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// import { Text } from 'react-native-elements';
// import { Title, Subheading } from 'react-native-paper';
import { Text } from '@ui-kitten/components';

class PageTitling extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text category='h1' style={styles.title}>
					{this.props.title}
				</Text>
				<Text category='h2' style={styles.subtitle}>
					{this.props.subtitle}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		// backgroundColor: 'rgb(245, 245, 245)',
		backgroundColor: 'rgb(255, 255, 255)',
	},
	title: {
		fontWeight: 700,
		textTransform: 'capitalize',
		color: 'rgb(0, 0 0)',
		fontSize: 32,
		// marginBottom: "20px"
		marginBottom: 5,
	},
	subtitle: {
		fontWeight: 600,
		textTransform: 'capitalize',
		color: 'rgb(0, 0 0)',
		fontSize: 24,
	}
});

export default PageTitling;

