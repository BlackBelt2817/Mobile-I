import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import pageOne from './page1';
import pageTwo from './page2';

const NavigationApp = StackNavigator({
	First: { screen: pageOne },
	Second: { screen: pageTwo }
});

export default class App extends Component {
	render() {
		return (
			<NavigationApp />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 35
	},
});
