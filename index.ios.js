/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import {AppRegistry, View} from 'react-native';
// import App from "./src/App.js";


// AppRegistry.registerComponent('rewebrtc', () => App);


import React, { Component } from 'react';
import HomeComponent from './src/components/home-component';
import { HomeStack } from './src/router';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TalmixNative extends Component {
  render() {
    return (
      <HomeStack />
    );
  }
}


AppRegistry.registerComponent('rewebrtc', () => TalmixNative);