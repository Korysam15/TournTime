import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Import View Controllers
// TODO Use different logos/icons
import ExploreViewController from '../ViewControllers/ExploreViewController';
import ProfileViewController from '../ViewControllers/ProfileViewController';
import MessagesViewController from '../ViewControllers/MessagesViewController';
import PlayTournamentViewController from '../ViewControllers/PlayTournamentViewController';

export default createBottomTabNavigator(
  {
    EXPLORE: {
      screen: ExploreViewController,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tintColor}) => <Icon name="search" size={25} color={tintColor}/>,
      }
    },
    MESSAGES: {
      screen: MessagesViewController,
      navigationOptions: {
        tabBarLabel: 'MESSAGES',
        tabBarIcon: ({tintColor}) => <Icon name="comments" size={25} color={tintColor}/>,
      }
    },
    PLAY: {
      screen: PlayTournamentViewController,
      navigationOptions: {
        tabBarLabel: 'PLAY',
        tabBarIcon: ({tintColor}) => <Icon name="play-circle" size={25} color={tintColor}/>
      }
    },
    PROFILE: {
      screen: ProfileViewController,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({tintColor}) => <Icon name="user" size={25} color={tintColor}/>,
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#3C91E6',
      labelStyle: {
        fontSize: 10,
        fontFamily: "Arial Hebrew",
        fontWeight: "bold",
      },
      style: {
        backgroundColor: '#303036',
      },
      swipeEnabled: false
    }
  }
);
