import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
} from 'native-base';

//TODO Add Firebase Authentication/Database

export default class LoginViewController extends Component {
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

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode)
  }

  render() {
    return (
      <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}}>
        <Container style={styles.jetBackground}>
          <Header transparent>
            <Left>
              <Button transparent>
                <Icon style={styles.lightBlue} size={25} onPress={() => this.props.navigation.popToTop()} name='chevron-left'/>
              </Button>
            </Left>
          </Header>
          <Text style={[styles.ashGreyColor, styles.titleText]}>Tourney Time</Text>
          <Button onPress={() => this.loginToFacebook()} style={styles.facebookButton} block>
            <Icon style={styles.whiteColor} size={25} name='facebook-square'></Icon>
            <Text style={styles.facebookButtonText}>Continue with Facebook</Text> //TODO Implement Facebook Login Button
          </Button>
          <Button style={styles.buttonStyle} block>
            <Text style={styles.buttonText}>Google</Text> // TODO Implement Google Login Button
          </Button>
          <Text style={styles.orStyle}>OR</Text>
          <Form style={{marginTop: -15}}>
            <Item onFocus={(event: Event) => {
          // `bind` the function if you're using ES6 classes
          this._scrollToInput(ReactNative.findNodeHandle(event.target))
        }} floatingLabel>
              <Label style={styles.ashGreyColor}>Email</Label>
              <Input
                returnKeyType={"next"}
                onSubmitEditing={(event) => {
                    this.Password._root.focus();
                }}
                style={[styles.inputStyle, styles.ashGreyColor]}/>
            </Item>
            <Item onFocus={(event: Event) => {
          // `bind` the function if you're using ES6 classes
          this._scrollToInput(ReactNative.findNodeHandle(event.target))
        }} floatingLabel last>
              <Label style={styles.ashGreyColor}>Password</Label>
              <Input
                returnKeyType={"done"}
                getRef={(c) => this.Password = c}
                secureTextEntry={true} style={[styles.inputStyle, styles.ashGreyColor]}/>
            </Item>
          </Form>
          <Button onPress={() => {this.props.navigation.navigate('TabNavigator')}} style={[styles.buttonStyle, styles.margin]} block>
            <Text style={styles.buttonText}>Login</Text>  //TODO Implement functionality to login
          </Button>
          <Button onPress={() => {Alert.alert(
            'Reset Password',
            "We'll send you an email with instructions to reset your password.",
            [
              {text: 'Cancel', style: 'cancel'},
              {text: 'Send', onPress: () => {
              }},
            ],
            { cancelable: true}
          )}} style={styles.center} transparent>
            <Text style={styles.lightBlue}>Forgot Password?</Text>  //TODO Implement functionality of forgotten password
          </Button>
          <Button onPress={() => {
            this.props.navigation.popToTop();
            this.props.navigation.navigate('SignUpViewController');
            }} style={styles.center} transparent>
            <Text style={[styles.ashGreyColor, styles.bold]}>Dont have an account?<Text style={styles.lightBlue}> Sign up!</Text></Text>
          </Button>
          <Text style={styles.legalText}>When you login, you agree to Tourney Time's Terms of Service. We will manage information about you as described in our Privacy Policy, and Cookie Policy.</Text>
        </Container>
      </KeyboardAwareScrollView>
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
