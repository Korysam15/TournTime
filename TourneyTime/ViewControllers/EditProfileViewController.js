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

export default class EditProfileViewController extends Component {
  static navigationOptions = { header: null }

  state = {
    avatarSource: null,
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
      <Container style={styles.jetBackground}>
      <Header transparent>
        <Left>
          <Button onPress={() => this.props.action} transparent>
            <Text style={styles.bleuDeFranceColor}>Cancel</Text>
          </Button>
        </Left>
        <Body>
          <Text style={styles.bleuDeFranceColor}>Edit Profile</Text>
        </Body>
        <Right>
          <Button transparent>
            <Text style={styles.bleuDeFranceColor}>Save</Text>
          </Button>
        </Right>
      </Header>
      <Button style={{marginTop: 60, alignSelf: 'center'}} onPress={this.selectPhotoTapped.bind(this)} transparent>
        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
        { this.state.avatarSource === null ? <Text style={{color: '#505050'}}>Select a Photo</Text> :
          <Image style={styles.avatar} source={this.state.avatarSource} />
        }
        </View>
      </Button>
      <Form style={{marginTop: 25}}>
        <Item floatingLabel>
          <Label style={styles.ashGreyColor}>Username</Label>
          <Input style={styles.ashGreyColor}/>
        </Item>
        <Item floatingLabel>
          <Label style={styles.ashGreyColor}>Full Name</Label>
          <Input style={styles.ashGreyColor}/>
        </Item>
        <Item floatingLabel>
          <Label style={styles.ashGreyColor}>Location</Label>
          <Input style={styles.ashGreyColor}/>
        </Item>
        <Item floatingLabel>
          <Label style={styles.ashGreyColor}>Gender</Label>
          <Input style={styles.ashGreyColor}/>
        </Item>
        <Item floatingLabel>
          <Label style={styles.ashGreyColor}>Age</Label>
          <Input style={styles.ashGreyColor}/>
        </Item>
      </Form>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
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
  },
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
