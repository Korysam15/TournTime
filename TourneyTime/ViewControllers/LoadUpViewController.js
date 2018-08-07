import React, { Component } from 'react';
import VolleyballVideo from '../videos/volleyball.mp4';
import { StyleSheet, View, Image } from 'react-native';
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
} from 'native-base';

import Video from 'react-native-video';
import bracket from '../images/bracket.png';


export default class LoadUpViewController extends Component {
  render() {
    var {navigate} = this.props.navigation;
    return (
      <Container>
        <Video
        repeat
        source={VolleyballVideo}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
        />
        <View style={styles.header}>
        <Image
          style={styles.logoStyle}
          source={bracket}
          resizeMode="stretch"
          />
          <View style={styles.lineStyle}/>
        <Text style={styles.titleText}>
            Tourney Time
        </Text>
        </View>
        <Body style={styles.bodyStyle}>
          <Button onPress={() => navigate('SignUpViewController')} block style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
          <Button onPress={() => navigate('LoginViewController')} block style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Log In</Text>
          </Button>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    marginTop: 100,
    flex: 1,
    flexDirection: 'row'
  },
  logoStyle: {
    width: 100,
    height: 100
  },
  lineStyle:{
    paddingLeft: 10,
    borderRightWidth: 5.0,
    borderColor: '#FFFFFF',
    height: 100
  },
  titleText: {
    lineHeight: 110,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Arial Hebrew',
    paddingLeft: 10
  },
  bodyStyle: {
    width: '100%',
    marginTop: 345
  },
  buttonStyle: {
    backgroundColor: '#303036',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  buttonText: {
    fontFamily: 'Arial Hebrew',
    fontWeight: 'bold',
    fontSize: 20,
    color: "#ACBDBA"
  }
});
