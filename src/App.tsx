/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Details } from './screens';

const App = createStackNavigator(
  {
    Home,
    Details
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(App);
