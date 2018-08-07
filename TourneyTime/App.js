'use strict';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
	StyleSheet,
	Text,
	View
}
from 'react-native';

/* import javascript */
import LoadUpViewController from './ViewControllers/LoadUpViewController';
import SignUpViewController from './ViewControllers/SignUpViewController';
import LoginViewController from './ViewControllers/LoginViewController';
import EmailSignUpViewController from './ViewControllers/EmailSignUpViewController';
import PlayTournamentViewController from './ViewControllers/PlayTournamentViewController';
import TabNavigator from './Components/TabNavigator';
import CalendarTemplate from './Components/CalendarTemplate';

export default class App extends React.Component {
	render() {
		return (
			<AppNavigator/>
		)
	}
}

const AppNavigator = StackNavigator (
	{
		/* Mainscreen */
    LoadUpViewController: {
      screen: LoadUpViewController,
      navigationOptions: ({navigation}) => ({
        header: null
      }),
    },
		TabNavigator: {
			screen: TabNavigator,
			navigationOptions: ({navigation}) => ({
				header: null
			}),
		},
		CalendarTemplate: {screen: CalendarTemplate},
		LoginViewController: {screen: LoginViewController},
		SignUpViewController: {screen: SignUpViewController},
		EmailSignUpViewController: {screen: EmailSignUpViewController},
	},
	{
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
