import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Picker } from 'react-native';

export default class CategorySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Picker
            selectedValue={"snow"}
            style={{ height: 50 }}
            //onValueChange={(itemValue, itemIndex) =>
            //  this.selectedValue({ itemIndex: itemValue })}
            >
            <Picker.Item label="Schneetraining" value="snow" />
            <Picker.Item label="Ausdauertraining" value="kondi" />
            <Picker.Item label="Krafttraining" value="kraft" />
          </Picker>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => CategorySelector);
