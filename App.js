import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Search: { screen: ScanScreen },
  }
  
);
const AppContainer = createAppContainer(TabNavigator);
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/