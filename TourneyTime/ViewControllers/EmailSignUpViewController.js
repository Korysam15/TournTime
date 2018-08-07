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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';

const rootRef = firebase.database().ref();
const userRef = rootRef.child('users');

export default class EmailSignUpViewController extends Component {
  static navigationOptions = { header: null }

  state = {
    avatarSource: null,
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
        this.Name._root.focus();
      }
    });
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
            <Icon style={styles.bleuDeFranceColor} onPress={() => {this.props.navigation.popToTop(); this.props.navigation.navigate('SignUpViewController');}} name='arrow-back'/>
          </Button>
        </Left>
      </Header>
      <Button style={{marginTop: 30, alignSelf: 'center'}} onPress={this.selectPhotoTapped.bind(this)} transparent>
        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
        { this.state.avatarSource === null ? <Text style={styles.ashGreyColor}>Select a Photo</Text> :
          <Image style={styles.avatar} source={this.state.avatarSource} />
        }
        </View>
      </Button>
      <Form style={{marginTop: 25}}>
        <Item onFocus={(event: Event) => {
      // `bind` the function if you're using ES6 classes
      this._scrollToInput(ReactNative.findNodeHandle(event.target))
    }} floatingLabel>
          <Label style={styles.ashGreyColor}>Full Name</Label>
          <Input
            getRef={(c) => this.Name = c}
            returnKeyType={"next"}
            onSubmitEditing={(event) => {
                this.Email._root.focus();
            }}
            style={[styles.bold, styles.ashGreyColor]}/>
        </Item>
        <Item onFocus={(event: Event) => {
      // `bind` the function if you're using ES6 classes
      this._scrollToInput(ReactNative.findNodeHandle(event.target))
    }} floatingLabel>
          <Label style={styles.ashGreyColor}>Email</Label>
          <Input
            getRef={(c) => this.Email = c}
            returnKeyType={"next"}
            onSubmitEditing={(event) => {
                this.Password._root.focus();
            }}
            style={[styles.bold, styles.ashGreyColor]}/>
        </Item>
        <Item onFocus={(event: Event) => {
      // `bind` the function if you're using ES6 classes
      this._scrollToInput(ReactNative.findNodeHandle(event.target))
    }} floatingLabel>
          <Label style={styles.ashGreyColor}>Password</Label>
          <Input
            getRef={(c) => this.Password = c}
            returnKeyType={"next"}
            onSubmitEditing={(event) => {
                this.Birthday._root.focus();
            }}
            secureTextEntry={true} style={[styles.bold, styles.ashGreyColor]}/>
        </Item>
        <Item onFocus={(event: Event) => {
      // `bind` the function if you're using ES6 classes
      this._scrollToInput(ReactNative.findNodeHandle(event.target))
    }} floatingLabel>
          <Label style={styles.ashGreyColor}>Birthday</Label>
          <Input
            getRef={(c) => this.Birthday = c}
            returnKeyType={"next"}
            onSubmitEditing={(event) => {
                this.Gender._root.focus();
            }}
            style={[styles.bold, styles.ashGreyColor]}/>
        </Item>
        <Item onFocus={(event: Event) => {
      // `bind` the function if you're using ES6 classes
      this._scrollToInput(ReactNative.findNodeHandle(event.target))
    }} floatingLabel last>
          <Label style={styles.ashGreyColor}>Gender</Label>
          <Input
            getRef={(c) => this.Gender = c}
            returnKeyType={"done"}
            style={[styles.bold, styles.ashGreyColor]}/>
        </Item>
      </Form>
      <Button ref={component => this.submit = component} onPress={() => {this.registerNewUser()}}style={[styles.buttonStyle, styles.margin]} block>
        <Text style={styles.buttonText}>Sign Up</Text>  //TODO Implement functionality to login
      </Button>
      <Text style={styles.legalText}>Your name will be public and we'll send updates to the email address provided. Age and Gender are used when registering for tournaments but are not shown publicly.</Text>
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
  center: {
    alignSelf: 'center'
  },
  bold: {
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
    color: '#000000'
  },
  legalText: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    color: '#ACBDBA'
  },
  avatarContainer: {
    borderColor: '#ACBDBA',
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
