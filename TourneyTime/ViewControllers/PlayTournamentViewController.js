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
  Icon,
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
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default class PlayTournamentViewController extends Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <Container style={{backgroundColor: '#acbdba'}}>
        <Header style={{backgroundColor: '#acbdba', borderBottomColor: '#303036', borderBottomWidth: 2}}>
          <Left></Left>
          <Body>
            <Text style={{fontWeight: 'bold'}}>Play</Text>
          </Body>
          <Right>
          </Right>
        </Header>
        <Text style={{marginTop: 40, fontFamily: 'Arial Hebrew', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>IT'S TOURNEY TIME!</Text>
        <Image style={{marginTop: 10, width: screenWidth, height: 200}} source={require('../images/volleyballNet.png')}></Image> */}
        <Text style={{marginTop: 10, fontFamily: 'Arial Hebrew', fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>ENTER YOUR UNIQUE TOURNEY CODE BELOW</Text>
        <Form style={{marginTop: 10}}>
          <Item floatingLabel last>
            <Label>UNIQUE ID</Label>
            <Input style={styles.inputStyle}/>
          </Item>
        </Form>
        <Button style={[styles.buttonStyle, styles.margin]} block>
          <Text style={styles.buttonText}>SUBMIT</Text>  //TODO Implement functionality to login
        </Button>
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
    backgroundColor: '#e9e9ef',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonText: {
    fontFamily: 'Arial Hebrew',
    fontWeight: 'bold',
    fontSize: 20,
    color: "#050401"
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
