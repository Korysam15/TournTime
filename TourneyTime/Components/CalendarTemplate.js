import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { Container,  ListItem, CheckBox, Header, Left, Body, Right, Button, Segment, Content, Text } from 'native-base'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class CalendarsScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isHidden: false,
      isActive: true
    };
  }

  loadItems(day) {
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = this.timeToString(time);
          if (!this.state.items[strTime]) {
            this.state.items[strTime] = [];
            const numItems = Math.floor(Math.random() * 5);
            for (let j = 0; j < numItems; j++) {
              this.state.items[strTime].push({
                name: 'Item for ' + strTime,
                height: Math.max(50, Math.floor(Math.random() * 150))
              });
            }
          }
        }
        //console.log(this.state.items);
        const newItems = {};
        Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
        this.setState({
          items: newItems
        });
      }, 1000);
      // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
      return (
        <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
      );
    }

    renderEmptyDate() {
      return (
        <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
      );
    }

    rowHasChanged(r1, r2) {
      return r1.name !== r2.name;
    }

    timeToString(time) {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }

  render() {
    const { checked } = this.state;
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};
    return (
      <Container style={{backgroundColor: '#303036'}}>
      <Header style={{backgroundColor: '#303036'}} hasSegment>
          <Left>
            <Button transparent>
              <Icon style={styles.bleuDeFranceColor} size={25} onPress={() => this.props.navigation.pop()} name='chevron-left'/>
            </Button>
          </Left>
          <Body>
            <Segment style={{backgroundColor: '#303036'}}>
              <Button onPress={() => {this.setState({isActive: !this.state.isActive}); this.setState({isHidden: !this.state.isHidden})}} first active={this.state.isActive}><Text>Calendar</Text></Button>
              <Button onPress={() => {this.setState({isActive: !this.state.isActive}); this.setState({isHidden: !this.state.isHidden})}} last active={!this.state.isActive}><Text>Agenda</Text></Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.bleuDeFranceColor} size={25} name='search'/>
            </Button>
          </Right>
        </Header>
        {this.state.isHidden ?
          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={new Date()}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            // agenda theme
            theme={{
              backgroundColor: '#acbdba',
              calendarBackground: '#acbdba',
              textSectionTitleColor: '#303036',
              selectedDayBackgroundColor: '#3C91E6',
              selectedDayTextColor: '#ffffff',
              dayTextColor: '#050401',
              textDisabledColor: '#d9e1e8',
              dotColor: 'yellow',
              selectedDotColor: 'yellow',
              monthTextColor: '#303036',
              agendaTodayColor: '#3C91E6',
              agendaKnobColor: '#3C91E6',
              agendaDayTextColor: '#303036',
              agendaDayNumColor: '#303036',
              // textDayFontFamily: 'monospace',
              // textMonthFontFamily: 'monospace',
              // textDayHeaderFontFamily: 'monospace',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14
            }}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
             // monthFormat={'yyyy'}
             // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
          :
          <CalendarList
            current={new Date()}
            pastScrollRange={24}
            futureScrollRange={24}
            showScrollIndicator={true}
            markedDates={
              {'2018-07-20': {startingDay: true, color: '#3C91E6'},
               '2018-07-21': {color: '#3C91E6'},
               '2018-07-22': {color: '#3C91E6'},
               '2018-07-23': {color: '#3C91E6', endingDay: true},
              }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={'period'}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: '#acbdba',
              calendarBackground: '#acbdba',
              textSectionTitleColor: '#303036',
              selectedDayBackgroundColor: '#123456',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#FFFFFF',
              todayBackgroundColor: '#3C91E6',
              dayTextColor: '#050401',
              textDisabledColor: '#d9e1e8',
              dotColor: 'yellow',
              selectedDotColor: 'yellow',
              monthTextColor: '#303036',
              // textDayFontFamily: 'monospace',
              // textMonthFontFamily: 'monospace',
              // textDayHeaderFontFamily: 'monospace',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14
            }}
          />
        }
        {/* <ListItem style={{backgroundColor: '#ACBDBA'}}>
            <CheckBox onPress={() => {console.log(checked); this.setState({checked: !checked}); console.log(checked);}} checked={checked} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem> */}
      </Container>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  bleuDeFranceColor: {
    color: '#3C91E6'
  },
});
