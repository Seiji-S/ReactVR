import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class travelVR extends React.Component {
  render() {
    const { mainView, menuItem, japan, italy, russia, china, korea, canada, redText } = styles;
    return (
      <View style={mainView}>
        <Text style={[menuItem, japan]}> Japan</Text>
        <Text style={[menuItem, italy]}> Italy</Text>
        <Text style={[menuItem, russia]}> Russia</Text>
        <Text style={[menuItem, china, redText]}> China</Text>
        <Text style={[menuItem, korea]}> Korea</Text>
        <Text style={[menuItem, canada, redText]}> Canada</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mainView: {
    height: 600,
    width: 600,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItem: {
    fontSize: 40,
    width: '50%',
    marginTop: 5,
    backgroundColor: '#0298D0',
    color: 'white',
    textAlign: 'center'
  },
  japan: { backgroundColor: '#FF0000'},
  italy: { backgroundColor: '#00FF00'},
  russia: { backgroundColor: '#0000FF'},
  china: { backgroundColor: '#FFFF00'},
  korea: { backgroundColor: '#000000'},
  canada: { backgroundColor: '#51414F'},
  redText: { color: 'red'}
});

AppRegistry.registerComponent('travelVR', () => travelVR);
