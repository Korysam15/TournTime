import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
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
  Input
} from 'native-base';

//TODO Add Firebase Authentication/Database

export default class SignUpViewController extends Component {
  static navigationOptions = { header: null }

  loginToFacebook = async () => {
    const res = await LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              alert(data.accessToken.toString());
            }
          )
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <Container style={styles.jetBackground}>
      <Header transparent>
        <Left>
          <Button transparent>
            <Icon style={styles.bleuDeFranceColor} size={25} onPress={() => this.props.navigation.popToTop()} name='chevron-left'/>
          </Button>
        </Left>
      </Header>
        <Text style={[styles.titleText, styles.ashGreyColor]}>Tourney Time</Text>
        <Button onPress={() => this.loginToFacebook()} style={styles.facebookButton} block>
          <Icon style={styles.whiteColor} size={25} name='facebook-square'></Icon>
          <Text style={styles.facebookButtonText}>Continue with Facebook</Text> //TODO Implement Facebook Login Button
        </Button>
        <Button style={styles.buttonStyle} block>
          <Text style={styles.buttonText}>Google</Text> // TODO Implement Google Login Button
        </Button>
        <Button onPress={() => this.props.navigation.navigate('EmailSignUpViewController')} style={styles.buttonStyle} block>
          <Text style={styles.buttonText}>Email</Text>
        </Button>
        <Button onPress={() => {
          this.props.navigation.popToTop();
          this.props.navigation.navigate('LoginViewController');
          }} style={styles.center} transparent>
          <Text style={[styles.ashGreyColor, styles.bold]}>Already have an account?<Text style={styles.bleuDeFranceColor}> Login!</Text></Text>
        </Button>
        <Text style={styles.legalText}>When you continue, you agree to Tourney Time's Terms of Service. We will manage information about you as described in our Privacy Policy, and Cookie Policy.</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  // COLORS
  ashGreyBackground: {
    backgroundColor: '#ACBDBA'
  },
  ashGreyColor: {
    color: '#ACBDBA'
  },
  jetBackground: {
    backgroundColor: '#303036'
  },
  jetColor: {
    color: '#303036'
  },
  bleuDeFranceBackground: {
    backgroundColor: '#3C91E6'
  },
  bleuDeFranceColor: {
    color: '#3C91E6'
  },
  whiteColor: {
    color: '#FFFFFF'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  center: {
    alignSelf: 'center'
  },
  bold: {
    fontWeight: 'bold'
  },
  orStyle: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ACBDBA'
  },
  inputStyle: {
    fontWeight: 'bold'
  },
  buttonStyle: {
    backgroundColor: '#E9E9EF',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonText: {
    fontFamily: 'Arial Hebrew',
    fontWeight: 'bold',
    fontSize: 20,
    color: "#000000"
  },
  facebookButton: {
    backgroundColor: '#3B5998',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  facebookButtonText: {
    fontFamily: 'Arial Hebrew',
    fontWeight: 'bold',
    fontSize: 20,
    color: "#FFFFFF"
  },
  lightBlue: {
    color: '#3C91E6',
    fontWeight: 'bold'
  },
  legalText: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    color: '#ACBDBA'
  }
});
