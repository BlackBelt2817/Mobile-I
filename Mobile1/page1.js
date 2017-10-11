import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

const codingmeme = require('./codingmeme.jpg');

export default class pageOne extends Component {
	static navigationOptions = {
		title: 'First Page'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
				<View style={{paddingTop: 5, paddingBottom: 5, flexDirection: 'row', justifyContent: 'center', display: 'flex', backgroundColor: 'black'}}>
					<Image
						style={{height: 250, width: 250}}
						source={codingmeme}
					/>
				</View>

				<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom: 30}}>
					<Button
						title='Like'
						color='red'
						onPress={() => {
							Alert.alert('You liked a post!');
						}}
					/>
					<Button
						title='Share'
						color='black'
						onPress={() => {
							Alert.alert('You shared a post!');
						}}
					/>
					<Button
						title='Comment'
						color='blue'
						onPress  ={() => {
							Alert.alert('You commented on a post!');
						}}
					/>
				</View>

				<View style={{paddingBottom: 30}}>
					<Text>Some User: A comment on the picture</Text>
					<Text>Another User: A comment on the picture</Text>
					<Text>And Another User: A comment on the picture</Text>
				</View>

				<View>
					<Button
						title='Go to page 2'
						onPress={() => {
							navigate('Second');
						}}
					/>
				</View>
			</View>
		);
	}
}