import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text 
          style={{color: 'red'}}>
          Aktuelles Datum</Text>
        <TextInput
          style={{height: 40}}
          placeholder="2019-05-10 12:22:35"
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => DatePicker);
