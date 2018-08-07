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
  CardItem,
  Card,
  Thumbnail
} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Modal
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-picker';

const screenWidth = Dimensions.get('window').width-20;

export default class ProfileViewController extends Component {
  static navigationOptions = { header: null }

  state = {
    modalVisible: false,
    avatarSource: null,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  showActionSheet = () => {
    this.ActionSheet.show()
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
    const data = [0.4, 0.6, 0.8]
    const data2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [ 20, 45, 28, 80, 99, 43 ]
      }]
    }
    return (
      <Container style={{backgroundColor: '#ACBDBA'}}>
        <Header style={{backgroundColor: '#3C91E6'}} transparent>
          <Right>
            <Button onPress={() => {this.setModalVisible(true)}} transparent>
              <Icon name="edit" size={25}></Icon>
            </Button>
            <Button onPress={() => this.showActionSheet()} transparent>
              <Icon name="gear" size={25}></Icon>
            </Button>
          </Right>
        </Header>
        <ScrollView style={{backgroundColor: '#ACBDBA'}}>
            <Content style={{marginTop: -10, backgroundColor: '#3C91E6'}}>
              <Card transparent style={{backgroundColor: '#3C91E6'}}>
                <CardItem style={{backgroundColor: '#3C91E6', flexDirection: 'column'}}>
                  <Image source={require('../images/Kory_Clark.jpg')} style={{height: 100, borderRadius: 50,width: 100}}/>
                  <Text style={{marginTop: 5, fontFamily: 'Arial Hebrew', fontWeight: 'bold', color: '#FFFAFF'}}>@KKUDDA</Text>
                  <Text style={{marginTop: 5, fontFamily: 'Arial Hebrew', fontWeight: 'bold', color: '#FFFAFF'}} note>Kory Clark</Text>
                  <Text style={{marginTop: 5, fontFamily: 'Arial Hebrew', fontWeight: 'bold', color: '#FFFAFF'}} note>Denver</Text>
                </CardItem>
                {/* <CardItem style={{backgroundColor: '#E9E9EF', marginTop: -10}}>
                  <Left>
                    <Button transparent>
                      <Icon active name="trophy" />
                      <Text>12</Text>
                    </Button>
                  </Left>
                  <Left>
                    <Button transparent>
                      <Icon active name="trophy" />
                      <Text>12</Text>
                    </Button>
                  </Left>
                  <Left>
                    <Button transparent>
                      <Icon active name="trophy" />
                      <Text>12</Text>
                    </Button>
                  </Left>
                </CardItem> */}
              </Card>
            </Content>
            {/* <Text>WPCT</Text> */}
            {/* <Text>TROPHIES</Text> */}
            <View
              style={{
                borderBottomColor: '#505050',
                borderBottomWidth: 1,
              }}
            />
            <Text style={styles.buttonText}>WPCT</Text>
            <ProgressChart
              data={data}
              width={screenWidth}
              height={150}
              chartConfig={{
                backgroundGradientFrom: '#034732',
                backgroundGradientTo: '#306857',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                }
              }}
              bezier
              style={{
                marginTop: 15,
                borderRadius: 16,
                alignSelf: 'center'
              }}
            />
            <View
              style={{
                marginTop: 10,
                borderBottomColor: '#505050',
                borderBottomWidth: 1,
              }}
            />
            <Text style={styles.buttonText}>NUM TOURNAMENTS PLAYED</Text>
            <BarChart
              data={data2}
              width={screenWidth}
              height={180}
              chartConfig={{
                backgroundGradientFrom: '#310A31',
                backgroundGradientTo: '#563656',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                }
              }}
              bezier
              style={{
                marginTop: 15,
                marginBottom: 50,
                borderRadius: 16,
                alignSelf: 'center'
              }}
            />
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <Container>
          <Header transparent>
            <Left>
              <Button onPress={() => this.setModalVisible(!this.state.modalVisible)} transparent>
                <Text style={styles.redFont}>Cancel</Text>
              </Button>
            </Left>
            <Body>
              <Text style={{fontWeight: 'bold'}}>Edit Profile</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text onPress={() => this.setModalVisible(!this.state.modalVisible)} style={styles.redFont}>Save</Text>
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
              <Label>Username</Label>
              <Input style={styles.inputStyle}/>
            </Item>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input style={styles.inputStyle}/>
            </Item>
            <Item floatingLabel>
              <Label>Location</Label>
              <Input secureTextEntry={true} style={styles.inputStyle}/>
            </Item>
          </Form>
          </Container>
        </Modal>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          options={['Account Settings', 'Manage Notifications', 'About TourneyTime', 'Help', 'Logout', 'cancel']}
          cancelButtonIndex={5}
          destructiveButtonIndex={4}
          onPress={(index) => { if(index == 4) {this.props.navigation.popToTop()}/* do something */ }}
        />
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
    marginTop: 10,
    marginLeft: 10,
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
