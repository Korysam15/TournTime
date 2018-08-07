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

import ImagePicker from 'react-native-image-picker';

export default class RegisteredTournamentsViewController extends Component {
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
      }
    });
  }

  render() {
    return (
      <Container>
      <Header transparent>
        <Left>
          <Button transparent>
            <Icon style={styles.goBackButton} onPress={() => {this.props.navigation.popToTop(); this.props.navigation.navigate('SignUpViewController');}} name='arrow-back'/>
          </Button>
        </Left>
      </Header>
      <Button style={{marginTop: 30, alignSelf: 'center'}} onPress={this.selectPhotoTapped.bind(this)} transparent>
        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
        { this.state.avatarSource === null ? <Text style={{color: '#505050'}}>Select a Photo</Text> :
          <Image style={styles.avatar} source={this.state.avatarSource} />
        }
        </View>
      </Button>
      <Form style={{marginTop: 25}}>
        <Item floatingLabel>
          <Label>Full Name</Label>
          <Input style={styles.inputStyle}/>
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input style={styles.inputStyle}/>
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input secureTextEntry={true} style={styles.inputStyle}/>
        </Item>
        <Item floatingLabel>
          <Label>Birthday</Label>
          <Input style={styles.inputStyle}/>
        </Item>
        <Item floatingLabel last>
          <Label>Gender</Label>
          <Input style={styles.inputStyle}/>
        </Item>
      </Form>
      <Button style={[styles.buttonStyle, styles.margin]} block>
        <Text style={styles.buttonText}>Sign Up</Text>  //TODO Implement functionality to login
      </Button>
      <Text style={styles.legalText}>Your name will be public and we'll send updates to the email address provided. Age and Gender are used when registering for tournaments but are not shown publicly.</Text>
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
