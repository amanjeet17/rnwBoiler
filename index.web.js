import React from 'react';
import {AppRegistry} from 'react-native';
import AppWeb from './src/AppWeb';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWeb);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});