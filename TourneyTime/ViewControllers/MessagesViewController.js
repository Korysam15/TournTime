import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  Form,
  Item,
  Label,
  Input,
  DatePicker
} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class  MessagesViewController extends Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <Container style={{backgroundColor: '#acbdba'}}>
        <Header style={{backgroundColor: '#acbdba', borderBottomColor: '#303036', borderBottomWidth: 2}}>
          <Left></Left>
          <Body>
            <Text style={{fontWeight: 'bold'}}>Messages</Text>
          </Body>
          <Right>
            <Button transparent>
                <Icon size={25} name="plus-square"></Icon>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  goBackButton: {
    color: '#dc2015'
  },
  center: {
    alignSelf: 'center'
  },
  inputStyle: {
    fontWeight: 'bold'
  },
  buttonStyle: {
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonText: {
    fontFamily: 'Arial Hebrew',
    fontWeight: 'bold',
    fontSize: 20,
    color: "#505050"
  },
  redFont: {
    color: '#dc2015',
    fontWeight: 'bold'
  },
  grayFont: {
    color: '#505050',
    fontWeight: 'bold'
  },
  legalText: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
