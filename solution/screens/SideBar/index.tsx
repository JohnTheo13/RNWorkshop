/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import {
  NavigationDrawerScreenComponent,
  DrawerContentComponentProps,
  DrawerNavigatorItems
} from 'react-navigation-drawer';

import styles from './style';

const SideBar = (
  props: DrawerContentComponentProps
): React.FunctionComponentElement<NavigationDrawerScreenComponent> => (
  <SafeAreaView style={styles.content}>
    <Image
      style={styles.image}
      source={require('../../../assets/infout.jpg')}
    />
    <DrawerNavigatorItems {...props} />
  </SafeAreaView>
);

export default SideBar;
