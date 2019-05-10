import * as React from 'react';
import { Text, View } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetKategorie from './components/CreateTraining/HeaderComp/AssetKategorie';
import AssetDiscipline from './components/CreateTraining/HeaderComp/AssetDiscipline';
import AssetDate from './components/CreateTraining/HeaderComp/AssetDate';
import AssetMood from './components/CreateTraining/HeaderComp/AssetMood';

// import styles
import styles from './assets/styles'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to
          get a shareable url.
        </Text>
        <Card><AssetKategorie /></Card>
        <Card><AssetDiscipline /></Card>
        <Card><AssetDate /></Card>
        <Card><AssetMood /></Card>
      </View>
    );
  }
}
