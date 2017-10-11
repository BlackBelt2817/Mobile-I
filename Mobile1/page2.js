import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

const topleft = require('./topleft.jpg');
const topright = require('./topright.jpg');
const bottomleft = require('./bottomleft.jpg');
const bottomright = require('./bottomright.jpeg');

export default class pageTwo extends Component {
	static navigationOptions = {
		title: 'Second Page'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
				<Text style={{fontSize: 28}}>
					Some Random Header
				</Text>
				<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
					<Image
						source={topleft}
						style={{flex: 1, resizeMode: 'contain', height: 175, width: 175}}
					/>
					<Image
						source={topright}
						style={{flex: 1, resizeMode: 'contain', height: 175, width: 175}}
					/>
				</View>
				<Text>
					This is a bunch of smaller text that is giving information about 
					the two images up above. You might see this kind of a design on a news site.
				</Text>
				<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
					<Image
						source={bottomleft}
						style={{flex: 1, resizeMode: 'contain', height: 175, width: 175}}
					/>
					<Image
						source={bottomright}
						style={{flex: 1, resizeMode: 'contain', height: 175, width: 175}}
					/>
				</View>
				<Text>
					This is a bunch of smaller text that is giving information about 
					the two images up above. You might see this kind of a design on a news site.
				</Text>


				<Button
					title='Go to page 1'
					onPress={() => {
						navigate('First');
					}}
				/>
			</View>
		);
	}
}