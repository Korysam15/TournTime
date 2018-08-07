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
  DatePicker,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';
import CalendarTemplate from '../Components/CalendarTemplate';
import ImagePicker from 'react-native-image-picker';

export default class ExploreViewController extends Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <Container style={styles.ashGreyBackground}>
        <Header style={[styles.ashGreyBackground,{borderBottomWidth: 2, borderBottomColor: '#303036'}]}>
          <Left></Left>
          <Body>
            <Text style={{color: '#050401', fontWeight: 'bold'}}>Explore</Text>
          </Body>
          <Right>
          </Right>
        </Header>
        <View style={{marginTop: -5, flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Card transparent style={[styles.ashGreyBackground,{marginLeft: 10, marginRight: 10, width: '50%', height: 185}]}>
              <CardItem style={[styles.ashGreyBackground,{flexDirection: 'column', flex: 1}]} button onPress={() => this.props.navigation.navigate('CalendarTemplate')}>
                <Image source={require('../images/Kory_Clark.jpg')} style={{height: 150, width: '100%', flex: 1}}/>
              </CardItem>
              <Text style={styles.buttonText}>Tournaments</Text>
            </Card>
            <Card transparent style={[styles.ashGreyBackground,{marginLeft: 10, marginRight: 10, width: '50%', height: 185}]}>
              <CardItem style={[styles.ashGreyBackground,{flexDirection: 'column', flex: 1}]} button onPress={() => this.props.navigation.navigate('CalendarTemplate')}>
                <Image source={require('../images/Kory_Clark.jpg')} style={{height: 150, width: '100%', flex: 1}}/>
              </CardItem>
              <Text style={styles.buttonText}>Hotels</Text>
            </Card>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Card transparent style={[styles.ashGreyBackground,{marginLeft: 10, marginRight: 10, width: '50%', height: 185}]}>
              <CardItem style={[styles.ashGreyBackground,{flexDirection: 'column', flex: 1}]} button onPress={() => this.props.navigation.navigate('CalendarTemplate')}>
                <Image source={require('../images/Kory_Clark.jpg')} style={{height: 150, width: '100%', flex: 1}}/>
              </CardItem>
              <Text style={styles.buttonText}>Leagues</Text>
            </Card>
            <Card transparent style={[styles.ashGreyBackground,{marginLeft: 10, marginRight: 10, width: '50%', height: 185}]}>
              <CardItem style={[styles.ashGreyBackground,{flexDirection: 'column', flex: 1}]} button onPress={() => this.props.navigation.navigate('CalendarTemplate')}>
                <Image source={require('../images/Kory_Clark.jpg')} style={{height: 150, width: '100%', flex: 1}}/>
              </CardItem>
              <Text style={styles.buttonText}>Partner/Subs</Text>
            </Card>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Card transparent style={[styles.ashGreyBackground,{marginLeft: 10, marginRight: 10, width: '50%', height: 185}]}>
              <CardItem style={[styles.ashGreyBackground,{flexDirection: 'column', flex: 1}]} button onPress={() => this.props.navigation.navigate('CalendarTemplate')}>
                <Image source={require('../images/Kory_Clark.jpg')} style={{height: 150, width: '100%', flex: 1}}/>
              </CardItem>
              <Text style={styles.buttonText}>Drop-In</Text>
            </Card>
            <Card transparent style={[styles.ashGreyBackground,{marginLeft: 10, marginRight: 10, width: '50%', height: 185}]}>
              <CardItem style={[styles.ashGreyBackground,{flexDirection: 'column', flex: 1}]} button onPress={() => this.props.navigation.navigate('CalendarTemplate')}>
                <Image source={require('../images/Kory_Clark.jpg')} style={{height: 150, width: '100%', flex: 1}}/>
              </CardItem>
              <Text style={styles.buttonText}>Car Pool</Text>
            </Card>
          </View>
        </View>
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
    alignSelf: 'center',
    marginBottom: 5,
    fontFamily: 'Arial Hebrew',
    fontWeight: 'bold',
    color: "#050401",
    fontSize: 18
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
